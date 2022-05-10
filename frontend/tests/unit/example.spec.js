import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/statistics-card/StatisticsCardVertical.vue";

describe("StatisticsCardVertical.vue", () => {
  it("renders props.statTitle when passed", () => {
    const statTitle = "new static Title";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { statTitle },
    });
    expect(wrapper.text()).toMatch(statTitle);
  });
});
