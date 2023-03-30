<template>
  <div>
    <slot name="activator" :openDropdown="openDropdown" />
    <div
      v-if="dropdownOpen"
      :class="[dropdownCustomClasses, align ? `${align}-0` : '']"
      class="absolute py-1 w-48 bg-white rounded-md shadow-xl z-20"
      @mouseleave="toggle !== 'click' ? hideDropdown() : ''"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggle: {
      type: String,
      default: "hover",
    },
    align: {
      type: String,
      default: "left",
    },
    dropdownCustomClasses: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    dropdownOpen: false,
  }),
  methods: {
    openDropdown() {
      if (this.toggle === "click") {
        this.dropdownOpen = !this.dropdownOpen;
        return;
      }
      if (!this.dropdownOpen) this.dropdownOpen = true;
    },
    hideDropdown() {
      if (this.dropdownOpen) this.dropdownOpen = false;
    },
  },
};
</script>

<style></style>
