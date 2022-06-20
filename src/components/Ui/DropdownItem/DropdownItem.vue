<template>
  <component
    :is="component"
    :to="props.to"
    :exact="isLink ? exact : undefined"
    :active-class="!exact ? $style.selected : undefined"
    :exact-active-class="exact ? $style.selected : undefined"
    :disabled="disabled"
    :selected="selected"
    :class="[
      $style.dropdownItem,
      $style[variant],
      isMobile && $style.mobile,
      disabled && $style.disabled,
      selected && $style.selected,
      diffFont && $style.diffFont,
    ]"
    @click="onClick"
  >
    <div :class="$style.innerWrapper">
      <slot
        name="prepend"
        :icon-name="$style.icon"
      >
        <div
          v-if="prependIcon || 'prepend' in $slots"
          :class="$style.prepend"
        >
          <Icon
            :package="null"
            :icon="prependIcon"
            :class="[
              $style.icon,
              $style[`s${iconSize}`]
            ]"
          />
        </div>
      </slot>
      <slot name="default">
        <div>
          <div
            v-if="label || 'default' in $slots"
            :class="[
              $style.content,
              diffFont && $style.diffFont
            ]"
          >
            <span
              :class="$style.title"
            >
              {{ label }}
            </span>
            <slot
              v-if="labelIcon"
              :icon-name="$style.labelIcon"
            >
              <Icon
                :package="null"
                :icon="labelIcon"
                :class="$style.labelIcon"
              />
            </slot>
          </div>
          <div
            v-if="text || 'default' in $slots"
            :class="$style.text"
          >
            {{ text }}
          </div>
        </div>
      </slot>
    </div>
    <div :class="$style.innerWrapper">
      <slot
        name="append"
        :icon-name="$style.icon"
      >
        <div
          v-if="labelContent || 'append' in $slots"
          :class="$style.labelContent"
        >
          {{ labelContent }}
        </div>
        <div
          v-if="appendIcon || 'append' in $slots"
          :class="$style.append"
        >
          <Icon
            :package="null"
            :icon="appendIcon"
            :class="[
              $style.icon,
              $style[`s${iconSize}`],
            ]"
          />
        </div>
      </slot>
    </div>
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useMobile } from "../../../common";
import { type DropdownItemProps, DropdownVariant } from "./index";
import Icon from "../Icon/Icon.vue";

const { isMobile } = useMobile();

const props = withDefaults(
  defineProps<DropdownItemProps>(),
  {
    variant: "default" as DropdownVariant,
    label: "label",
    disabled: false,
    selected: false,
  },
);

const isLink = computed(() => (
  !!props.to
));

const component = computed(() => (
  isLink.value ? "router-link" : "li"
));

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const onClick = (event: MouseEvent) => {
  if (props.disabled) {
    return;
  }

  emit("click", event);
};
</script>

<style lang="scss" module>
@import "../../../assets/utils";

@keyframes circleAnimation {
  0% {
    transform: scale(20%, 20%);
  }
  25% {
    transform: scale(40%, 40%);
  }
  50% {
    transform: scale(60%, 60%);
  }
  75% {
    transform: scale(80%, 80%);
  }
  100% {
    transform: scale(100%, 100%);
  }
}

.circle {
  position: absolute;
  z-index: 1;
  animation: circleAnimation 1s linear;

  width: rem(310px);
  height: rem(310px);

  border-radius: 50%;
  background-color: var(--color-Secondary_Gray_9);
}

.dropdownItem {
  font-weight: 600;
  font-size: rem(12px);
  line-height: rem(16px);
  --bg: #ffffff;
  --item-x-padding: #{rem(0)};
  background-color: var(--bg);

  position: relative;
  padding: rem(8px) var(--item-x-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  overflow: hidden;

  user-select: none;
  cursor: pointer;

  .content {
    display: flex;
    align-items: flex-start;
    font-weight: 600;
    font-size: rem(12px);
    line-height: rem(16px);
    color: #030307;
  }

  .title {
    margin-right: rem(4px);
  }

  .text {
    margin-top: rem(4px);
    // @include typography_Body_xs;
    color: var(--text-color);
  }

  .labelContent {
    // @include typography_Body_S;
    color: var(--color-Secondary_Gray_5);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .labelIcon {
    width: rem(22px);
    height: rem(16px);
  }

  &:not(:last-child) {
    border-bottom: rem(1px) solid var(--color-Secondary_Gray_8);
  }

  &:not(.mobile) {
    &:hover {
      --bg: #E6DDF6;
    }

    &:active,
    &:focus,
    &.selected {
      --bg: var(--color-Secondary_Gray_8);
    }
  }

  &.diffFont.mobile {
    .content {
      // @include typography_Body_M;
    }
  }

  &.default {
    .content {
      --label-color: var(--color-Text_Light_Primary);
    }
    .text {
      --text-color: var(--color-Text_Light_Secondary);
    }

    &.disabled {
      .content {
        --label-color: var(--color-Text_Light_Secondary);
      }

      .text {
        --text-color: var(--color-Text_Light_Tertiary);
      }
    }
  }
  &.link {
    .content {
      --label-color: var(--color-Primary_Blue_1);
    }
    .text {
      --text-color: var(--color-Primary_Blue_3);
    }
  }
  &.error {
    .content {
      --label-color: var(--color-Red_1);
    }
    .text {
      --text-color: var(--color-Red_3);
    }
  }

  .prepend {
    .avatar {
      margin-right: rem(16px);
    }

    .icon {
      margin-right: rem(12px);
    }
  }

  .append {
    .avatar {
      margin-right: rem(8px);
    }
    .icon {
      margin-left: rem(10px);
      color: var(--color-Secondary_Gray_5);
    }
  }
}

.innerWrapper {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 4;
}

.s12 {
  &.icon {
    width: rem(12px);
    height: rem(12px);
  }
}

.s16 {
  &.icon {
    width: rem(16px);
    height: rem(16px);
  }
}

.s24 {
  &.icon {
    width: rem(24px);
    height: rem(24px);
  }
}
</style>
