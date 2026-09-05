import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DashboardPage from '@/pages/DashboardPage.vue'

describe('DashboardPage', () => {
  it('рендерит заголовок', () => {
    const wrapper = mount(DashboardPage)
    expect(wrapper.text()).toContain('Dashboard')
  })
})
