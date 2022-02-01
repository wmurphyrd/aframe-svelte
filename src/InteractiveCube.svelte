<script>
  export let id;
  export let position;
  export let color;

  let shape = { primitive: 'box' }
  let opacity = 1
  let wireframe = false
</script>

<a-entity {id} {position} geometry={shape}
          class="cube" scale="0.5 0.5 0.5"
          hoverable grabbable drag-droppable shadow
          material="color: {color}; opacity: {opacity}; wireframe: {wireframe}"
          on:hover-start={() => (opacity = 0.7)}
          on:hover-end={() => (opacity = 1)}
          on:dragover-start={() => (wireframe = true)}
          on:dragover-end={() => (wireframe = false)}
          on:drag-drop={() => (shape = { primitive: 'sphere', radius: 0.5 })} />