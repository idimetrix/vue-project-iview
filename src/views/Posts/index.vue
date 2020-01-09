<template>
  <div class="home">
    <Row class="m-b-25">
      <i-Col span="6">
        <Select
          v-model="per_page"
          @on-change="pager"
        >
          <Option
            v-for="item in per_pages"
            :value="item"
            :key="item"
          >
            {{ item }}
          </Option>
        </Select>
      </i-Col>
      <i-Col
        span="6"
        offset="12"
      >
        <i-Input
          v-model="search"
          placeholder="Search..."
          @on-change="searcher"
        />
      </i-Col>
    </Row>

    <Table
      border
      :columns="columns"
      :data="postsFilterCurrent"
      :loading="loading"
      @on-expand="expander"
    >
      <template
        slot-scope="{ row }"
        slot="id"
      >
        <strong>{{ row.id }}</strong>
      </template>

      <template
        slot-scope="{ row }"
        slot="user"
      >
        {{ row.user.name }}
      </template>

      <template
        slot-scope="{ row }"
        slot="title"
      >
        {{ row.title }}
      </template>

      <template
        slot-scope="{ row }"
        slot="body"
      >
        {{
          expanded.indexOf(row.id) === -1
            ? row.body.slice(0, slice) + "..."
            : row.body
        }}
        <div v-if="expanded.indexOf(row.id) === -1">
          <a @click="expanded.push(row.id)">read more</a>
        </div>
      </template>

      <template
        slot-scope="{ row }"
        slot="comments"
      >
        {{ row.comments.length }}
      </template>
    </Table>
    <Row class="m-t-25">
      <i-Col span="24">
        <Page
          :total="postsFilterTotal.length"
          :current="page"
          :page-size="per_page"
          show-total
          prev-text="Previous"
          next-text="Next"
          @on-change="paginate"
        />
      </i-Col>
    </Row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_POSTS } from '@/store/actions.type'

import RowExpand from './RowExpand.vue'

export default {
  name: 'Posts',
  components: {

  },
  data () {
    return {
      expanded: [],
      deleted: [],
      slice: 100,
      search: '',
      searchBy: 'title,body',
      order: 'desc',
      orderBy: 'id',
      page: 1,
      per_page: 10,
      per_pages: [5, 10, 15, 25, 50],
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          type: 'expand',
          width: 60,
          render: (h, params) =>
            h(RowExpand, {
              props: {
                row: params.row
              }
            })
        },
        {
          title: '#',
          slot: 'id',
          key: 'id',
          sortable: true,
          width: 65
        },
        {
          title: 'User',
          slot: 'user',
          key: 'user',
          sortable: true,
          width: 200
        },
        {
          title: 'Title',
          slot: 'title',
          key: 'title',
          sortable: true
        },
        {
          title: 'Body',
          slot: 'body',
          key: 'body',
          sortable: true
        },
        {
          title: 'Comments',
          slot: 'comments',
          key: 'comments',
          sortable: true,
          width: 130
        },
        {
          title: 'Actions',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, 'Delete')
            ])
          }
        }
      ]
    }
  },
  methods: {
    sort (data) {
      this.orderBy = data.key
      this.order = data.order
    },
    searcher () {
      this.page = 1
    },
    paginate (page) {
      this.page = page
    },
    expander (row, status) {
      const index = this.expanded.indexOf(row.id)

      if (status) {
        index === -1 && this.expanded.push(row.id)
      } else {
        index !== -1 && this.expanded.splice(index, 1)
      }
    },
    pager () {
      this.page = 1
    },
    selectAll () {
      this.$refs.table.selectAll(true)
    },
    deselectAll () {
      this.$refs.table.selectAll(false)
    },
    show (index) {
      const { id, title, body } = this.postsFilterCurrent[index]

      this.$Modal.info({
        title: 'Info',
        content: `<b>Id: ${id}</b><br><br><b>Title:</b> ${title}<br><br><b>Body:</b> ${body}}`
      })
    },
    remove (index) {
      const { id } = this.postsFilterCurrent[index]

      this.deleted.push(id)
    }
  },
  computed: {
    ...mapGetters({ fetchedPosts: 'posts', loading: 'loading' }, 'posts'),
    postsFilterTotal () {
      const columns = this.searchBy.split(/\s*,\s*/g)

      return this.fetchedPosts
        .filter(post =>
          this.deleted.indexOf(post.id) === -1
        )
        .filter(post =>
          columns.filter(column => post[column].toLowerCase().indexOf(this.search) !== -1).length
        )
    },

    postsFilterCurrent () {
      return this.postsFilterTotal.slice(
        (this.page - 1) * this.per_page,
        (this.page - 1) * this.per_page + this.per_page
      )
    }
  },
  mounted () {
    this.$store.dispatch(FETCH_POSTS)
  }
}
</script>
