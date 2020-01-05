<template>
  <div class="sider">
    <Menu
      :active-name="$route.name"
      theme="light"
      width="auto"
    >
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-navigate" />
          Blog
        </template>
        <MenuItem
          name="users"
          to="/users"
        >
          Users
        </MenuItem>
        <MenuItem
          name="posts"
          to="/posts"
        >
          Posts
        </MenuItem>
        <MenuItem
          name="comments"
          to="/comments"
        >
          Comments
        </MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-keypad" />
          Media
        </template>
        <MenuItem
          name="albums"
          to="/albums"
        >
          Albums
        </MenuItem>
        <MenuItem
          name="photos"
          to="/photos"
        >
          Photos
        </MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-analytics" />
          Pages
        </template>
        <MenuItem
          name="page1"
          to="/page1"
        >
          Page 1
        </MenuItem>
        <MenuItem
          name="page2"
          to="/page2"
        >
          Page 2
        </MenuItem>
        <MenuItem
          name="page3"
          to="/page3"
        >
          Page 3
        </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.sider {
}
</style>
