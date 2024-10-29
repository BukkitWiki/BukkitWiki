<template>
  <div class="top-box">
    <a class="link-container" :href="routePath">
        <span class="text-container">
            <span class="text">{{ title }}</span>
        </span>
      <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="0.5em" height="1em" viewBox="0 0 12 24">
        <defs>
          <path id="weuiArrowOutlined0" fill="currentColor"
                d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"/>
        </defs>
        <use fill-rule="evenodd" href="#weuiArrowOutlined0" transform="rotate(-180 5.02 9.505)"/>
      </svg>
    </a>
  </div>

</template>

<script setup lang="ts">
import {usePageData, resolveRoutePath, resolveRoute} from 'vuepress/client';

const props = defineProps({
  path:String
})

const pageData = usePageData()
const routePath = resolveRoutePath(props.path, pageData.value.path)
const route = resolveRoute(routePath)

const title = route.meta.t
</script>

<style scoped>
.link-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: .75rem 1.25rem;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 8px;
  max-width: 768px;
  width: 90%;
  height: 24px;
  margin: 0 auto;
  text-decoration: none;
  transition: box-shadow 0.3s, color 0.3s;
}

.link-container:hover {
  border-color: var(--vp-c-accent, #299764);
  color: var(--vp-c-accent-hover, #299764);
}

.text-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: var(--vp-c-text, rgb(60, 60, 67));
  text-decoration: none;

}

.text {
  font-size: 1rem;
  transition: color 0.3s;
}

.link-container:hover .text {
  color: var(--vp-c-accent-hover, #299764);
}

.chevron-icon {
  width: 1.5rem;
  height: 1.5rem;
  mask-repeat: no-repeat;
  mask-position: center;
  transition: transform 0.3s, background-color 0.3s;
  color: var(--vp-c-text, rgb(60, 60, 67));
}

.link-container:hover .chevron-icon {
  transform: translateX(4px);
  color: var(--vp-c-accent-hover, #299764);
}

.top-box{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>