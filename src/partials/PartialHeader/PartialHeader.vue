<template>
  <Header class="header">
    <Menu
      mode="horizontal"
      theme="dark"
      active-name="1"
    >
      <div class="header__logo" />
      <div class="header__menu">
        <MenuItem name="1">
          <Icon type="ios-navigate" />
          Item 1
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-keypad" />
          Item 2
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-analytics" />
          Item 3
        </MenuItem>
        <MenuItem name="4">
          <Icon type="ios-paper" />
          Item 4
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  &__logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  &__menu {
    width: 420px;
    margin: 0 20px 0 auto;
  }
}
</style>
