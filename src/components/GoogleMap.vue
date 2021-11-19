<template>
     <div class="container-fluid mapContainer">
            <GmapMap
              :center="{ lat: -20.9323098, lng: 55.2927796 }"
              :zoom="15"
              map-type-id="satellite"
              style="width: 100%; height: 477px"
            >
              <GmapMarker
                ref="myMarker"
                :position="
                  google && new google.maps.LatLng(-20.9323098, 55.2927796)
                "
                :clickable="true"
                :draggable="true"
                @click="center = position"
              />             
            </GmapMap>
          </div>
</template>
<script>
import {gmapApi} from 'vue2-google-maps'
export default {
    name:"GoogleMap",
    data(){
        return{ 
          }
    },
    computed:{
      google:gmapApi
    }
   
}
</script>
<style lang="scss" scoped>
.mapContainer{
 position:relative;
 top:170px;
}
</style>
