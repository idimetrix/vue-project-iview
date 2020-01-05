<template>
  <div
    id="app"
    class="layout"
  >
    <Layout>
      <partial-header />

      <Layout :style="{ height: 'calc(100vh - 64px)' }">
        <Sider
          hide-trigger
          class="bg-white"
        >
          <partial-sider />
        </Sider>

        <Layout class="p-l-25 p-r-25">
          <partial-panel />

          <Content class="p-25 content">
            <router-view />
          </Content>

          <partial-footer />
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import PartialHeader from '@/partials/PartialHeader'
import PartialFooter from '@/partials/PartialFooter'
import PartialSider from '@/partials/PartialSider'
import PartialPanel from '@/partials/PartialPanel'

export default {
  name: 'App',
  components: {
    PartialHeader,
    PartialFooter,
    PartialSider,
    PartialPanel
  }
}
</script>

<style lang="scss" scoped>
  #app {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;

  .content {
    overflow: auto;
    background: #fff;
  }
  }
</style>
