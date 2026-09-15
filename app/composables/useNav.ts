export interface NavItem {
  key: string
  label: string
  labelEn: string
  to: string
  icon?: string
}

export const useAppMenu = (mode: 'portal' | 'public') => {
  const authStore = useAuthStore()

  return computed<NavItem[]>(() => {
    if (mode === 'portal') {
      return [
        { key: 'dashboard', label: 'แดชบอร์ด', labelEn: 'Dashboard', to: '/portal/dashboard', icon: 'layout-dashboard' },
        { key: 'campaigns', label: 'แคมเปญ', labelEn: 'Campaigns', to: '/portal/campaigns', icon: 'briefcase' },
        { key: 'tasks', label: 'งานของฉัน', labelEn: 'My Tasks', to: '/portal/tasks', icon: 'check-square' },
        { key: 'wallet', label: 'กระเป๋าเงิน', labelEn: 'Wallet', to: '/portal/wallet', icon: 'wallet' },
        { key: 'notifications', label: 'การแจ้งเตือน', labelEn: 'Notifications', to: '/portal/notifications', icon: 'bell' },
        { key: 'profile', label: 'โปรไฟล์', labelEn: 'Profile', to: '/portal/profile', icon: 'user' },
      ]
    }

    return [
      { key: 'home', label: 'หน้าหลัก', labelEn: 'Home', to: '/' },
      { key: 'campaigns', label: 'แคมเปญ', labelEn: 'Campaigns', to: authStore.isAuthenticated ? '/portal/campaigns' : '/login' },
      { key: 'about', label: 'เกี่ยวกับเรา', labelEn: 'About', to: '/about' },
      { key: 'services', label: 'บริการ', labelEn: 'Services', to: '/services' },
      { key: 'faq', label: 'คำถามที่พบบ่อย', labelEn: 'FAQ', to: '/faq' },
      { key: 'contact', label: 'ติดต่อเรา', labelEn: 'Contact', to: '/contact' },
    ]
  })
}
