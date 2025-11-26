<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import ToggleTheme from './components/sections/general/ToggleTheme.vue';
import AboutLayout from './layouts/AboutLayout.vue';
import HomeLayout from './layouts/HomeLayout.vue';
import ServicesLayout from './layouts/ServicesLayout.vue';
import ToolsLayout from './layouts/ToolsLayout.vue';

import { useData } from 'vitepress'
import { onMounted, watch } from 'vue'

const { frontmatter, site, page } = useData()

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    if (selector.startsWith('meta[name="')) {
      const name = selector.match(/meta\[name="(.*)"\]/)?.[1]
      if (name) el.name = name
    } else if (selector.startsWith('meta[property="')) {
      const prop = selector.match(/meta\[property="(.*)"\]/)?.[1]
      if (prop) el.setAttribute('property', prop)
    }
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

function setLinkRel(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function updateHead() {
  const s: any = site.value || {}
  const p: any = page.value || {}
  const f: any = frontmatter.value || {}

  const siteTitle = s.title || 'Vasak Group'
  const pageTitle = f.title || p.title || ''
  const title = pageTitle ? `${pageTitle} — ${siteTitle}` : siteTitle

  const description = f.description || f.info?.description || s.description || ''
  const image = f.image || f.info?.image || '/img/logo.svg'
  const siteUrl = s.url || s.siteUrl || ''
  const url = siteUrl ? (siteUrl.replace(/\/$/, '') + (p.path || p.relativePath || '')) : ''

  // title
  document.title = title

  // metas
  try { setMeta('meta[name="description"]', 'content', description) } catch { }
  try { setMeta('meta[property="og:title"]', 'content', title) } catch { }
  try { setMeta('meta[property="og:description"]', 'content', description) } catch { }
  try { setMeta('meta[property="og:type"]', 'content', 'website') } catch { }
  try { setMeta('meta[property="og:image"]', 'content', image) } catch { }
  try { setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image') } catch { }
  try { setMeta('meta[name="twitter:title"]', 'content', title) } catch { }
  try { setMeta('meta[name="twitter:description"]', 'content', description) } catch { }
  try { setMeta('meta[name="twitter:image"]', 'content', image) } catch { }

  // canonical
  if (url) setLinkRel('canonical', url)

  // JSON-LD Organization
  try {
    const id = 'vp-org-jsonld'
    let script = document.head.querySelector(`#${id}`) as HTMLScriptElement | null
    const json = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": siteTitle,
      "url": siteUrl || '',
      "logo": s.logo || '/img/logo.svg',
      "sameAs": ((s.themeConfig && s.themeConfig.socialLinks) || []).map((x: any) => x.link).filter(Boolean)
    })
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = id
      document.head.appendChild(script)
    }
    script.textContent = json
  } catch (e) { }
}

onMounted(() => updateHead())
watch([frontmatter, page, site], () => updateHead())
</script>

<template>
  <NavBarComponent />
  <Transition name="page-fade" mode="out-in" appear>
    <main v-if="frontmatter.layout === 'home'" :key="frontmatter.layout || 'home'">
      <HomeLayout />
    </main>
    <main v-else-if="frontmatter.layout === 'about'" :key="frontmatter.layout || 'headtitle'">
      <AboutLayout />
    </main>
    <main v-else-if="frontmatter.layout === 'services'" :key="frontmatter.layout || 'services'">
      <ServicesLayout />
    </main>
    <main v-else-if="frontmatter.layout === 'tools'" :key="frontmatter.layout || 'tools'">
      <ToolsLayout />
    </main>
    <main v-else :key="frontmatter.layout || 'content'">
      <Content />
    </main>
  </Transition>
  <FooterComponent />
  <ToggleTheme />
</template>

<style scoped>
.page-fade-enter-active,
.page-fade-leave-active {
  will-change: opacity, transform, filter;
  transition: opacity 520ms cubic-bezier(.16, .84, .24, 1),
    transform 520ms cubic-bezier(.16, .84, .24, 1),
    filter 520ms cubic-bezier(.16, .84, .24, 1);
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.992);
  filter: blur(4px);
}

.page-fade-enter-to,
.page-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.page-fade-enter-from>*,
.page-fade-leave-to>* {
  box-shadow: 0 8px 30px rgba(2, 6, 23, 0.06);
}

@media (prefers-reduced-motion: reduce) {

  .page-fade-enter-active,
  .page-fade-leave-active {
    transition: none !important;
    filter: none !important;
    transform: none !important;
  }
}
</style>
