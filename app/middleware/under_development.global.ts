export default defineNuxtRouteMiddleware((to) => {
  // บล็อกทุกหน้าที่อยู่ใน /portal/ ยกเว้น dashboard และหน้า development
  if (
    to.path.startsWith('/portal/') && 
    to.path !== '/portal/dashboard' && 
    to.path !== '/portal/development'
  ) {
    return navigateTo('/portal/development')
  }
})
