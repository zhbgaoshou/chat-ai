// 自定义指令长按触发回调函数

/**
 * start:开始的回调
 * end:结束的回调
 * params:参数
 */
export const longpressDirective = {
  beforeMount(el, binding) {
    if (
      typeof binding.value.start !== "function" ||
      typeof binding.value.end !== "function"
    ) {
      throw new Error(
        "The value of the v-long-press directive must be an object with start and end functions"
      );
    }

    let pressTimer = null;
    let isStartCalled = false;

    const start = (e) => {
      if (e.type === "click" && e.button !== 0) {
        return;
      }

      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          binding.value.start(binding.value.params, e);
          isStartCalled = true;
        }, 300);
      }
    };

    const cancel = (e) => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }

      if (isStartCalled) {
        binding.value.end(binding.value.params, e);
        isStartCalled = false;
      }
    };

    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("mouseup", cancel);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel, { passive: true });
    el.addEventListener("touchcancel", cancel, { passive: true });
  },
  unmounted(el) {
    el.removeEventListener("mousedown", start);
    el.removeEventListener("touchstart", start);
    el.removeEventListener("mouseup", cancel);
    el.removeEventListener("mouseout", cancel);
    el.removeEventListener("touchend", cancel);
    el.removeEventListener("touchcancel", cancel);
  },
};
