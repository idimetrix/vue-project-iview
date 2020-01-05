<template>
  <div>
    <Row>
      <i-Col
        span="24"
        class="m-b-25"
      >
        <h1>{{ row.user.name }} ({{ row.user.username }})</h1>
        <h3><Icon type="md-mail" /> {{ row.user.email }}</h3>
        <h3><Icon type="md-phone-portrait" /> {{ row.user.phone }}</h3>
        <h3><Icon type="md-link" /> {{ row.user.website }}</h3>
      </i-Col>
    </Row>

    <Row>
      <i-Col span="11">
        <List
          header="Address"
          border
          size="small"
        >
          <ListItem>
            <i-Col span="8">
              <strong>Street</strong>
            </i-Col>
            <i-Col span="16">
              {{ row.user.address.street }}
            </i-Col>
          </ListItem>
          <ListItem>
            <i-Col span="8">
              <strong>Suite</strong>
            </i-Col>
            <i-Col span="16">
              {{ row.user.address.suite }}
            </i-Col>
          </ListItem>
          <ListItem>
            <i-Col span="8">
              <strong>City</strong>
            </i-Col>
            <i-Col span="16">
              {{ row.user.address.city }}
            </i-Col>
          </ListItem>
          <ListItem>
            <i-Col span="8">
              <strong>Zipcode</strong>
            </i-Col>
            <i-Col span="16">
              {{ row.user.address.zipcode }}
            </i-Col>
          </ListItem>
          <ListItem>
            <i-Col span="8">
              <strong>Geo</strong>
            </i-Col>
            <i-Col
              span="16"
            >
              Lat: {{ row.user.address.geo.lat }}, Lng:
              {{ row.user.address.geo.lng }}
            </i-Col>
          </ListItem>
        </List>
      </i-Col>
      <i-Col
        span="11"
        offset="2"
      >
        <List
          header="Company"
          border
          size="small"
        >
          <ListItem>
            <i-Col span="8">
              <strong>Name</strong>
            </i-Col>
            <i-Col span="16">
              {{ row.user.company.name }}
            </i-Col>
          </ListItem>
          <ListItem>
            <i-Col span="8">
              <strong>Phrase</strong>
            </i-Col>
            <i-Col span="16">
              {{ row.user.company.catchPhrase }}
            </i-Col>
          </ListItem>
          <ListItem>
            <i-Col span="8">
              <strong>BS</strong>
            </i-Col>
            <i-Col span="16">
              {{ row.user.company.bs }}
            </i-Col>
          </ListItem>
        </List>
      </i-Col>
    </Row>

    <hr class="m-t-25 m-b-25">

    <Row>
      <i-Col span="24">
        <h1 class="m-b-25">
          Comments
        </h1>
        <List>
          <ListItem
            v-for="comment in row.comments"
            :key="comment.id"
          >
            <ListItemMeta
              :avatar="'https://i.pravatar.cc/150?u=' + comment.id"
              :title="comment.name"
              :description="comment.body"
            />
          </ListItem>
        </List>
      </i-Col>
    </Row>
  </div>
</template>
<script>
export default {
  props: {
    row: Object,
    default: {}
  }
}
</script>
