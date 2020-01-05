<template>
  <div>
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
              {{ row.address.street }}
            </i-Col>
          </ListItem>
          <ListItem>
            <i-Col span="8">
              <strong>Suite</strong>
            </i-Col>
            <i-Col span="16">
              {{ row.address.suite }}
            </i-Col>
          </ListItem>
          <ListItem>
            <i-Col span="8">
              <strong>City</strong>
            </i-Col>
            <i-Col span="16">
              {{ row.address.city }}
            </i-Col>
          </ListItem>
          <ListItem>
            <i-Col span="8">
              <strong>Zipcode</strong>
            </i-Col>
            <i-Col span="16">
              {{ row.address.zipcode }}
            </i-Col>
          </ListItem>
          <ListItem>
            <i-Col span="8">
              <strong>Geo</strong>
            </i-Col>
            <i-Col
              span="16"
            >
              Lat: {{ row.address.geo.lat }}, Lng:
              {{ row.address.geo.lng }}
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
              {{ row.company.name }}
            </i-Col>
          </ListItem>
          <ListItem>
            <i-Col span="8">
              <strong>Phrase</strong>
            </i-Col>
            <i-Col span="16">
              {{ row.company.catchPhrase }}
            </i-Col>
          </ListItem>
          <ListItem>
            <i-Col span="8">
              <strong>BS</strong>
            </i-Col>
            <i-Col span="16">
              {{ row.company.bs }}
            </i-Col>
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
