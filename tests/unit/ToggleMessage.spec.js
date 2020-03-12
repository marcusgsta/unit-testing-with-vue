import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import ToggleMessage from '@/components/ToggleMessage.vue'

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(ToggleMessage);
});

afterEach(() => {
  wrapper.destroy();
});


describe('ToggleMessage.vue', () => {
  it('contains classes', () => {
    expect(wrapper.classes('hello')).toBe(true)
    expect(wrapper.classes('bangle')).toBe(true)
  })
})

  it('toggles message when button is clicked', async () => {
    const button = wrapper.find('#toggle-message')
    const p = wrapper.find('p')
    expect(p.is('p')).toBe(true)
    button.trigger('click')
    await Vue.nextTick()
    expect(p.text()).toBe('message')
    button.trigger('click')
    await Vue.nextTick()
    expect(p.text()).toBe('toggled message')
  })


// describe('HelloWorld.vue', () => {
//   it('toggles message when button is clicked', async () => {
//     const wrapper = shallowMount(HelloWorld)
//     wrapper.find('button').trigger('click')
//     await Vue.nextTick()
//     expect(wrapper.find('p').text()).toMatch('message')
//   })
// })
    

