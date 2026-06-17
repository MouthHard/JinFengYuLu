<template>
  <Transition name="modal">
    <div v-if="visible" class="edit-modal-overlay" @click.self="handleClose">
      <div class="edit-modal">
        <div class="modal-header">
          <h2 class="modal-title">编辑</h2>
          <button class="close-button" aria-label="关闭" @click="handleClose">
            <CloseIcon />
          </button>
        </div>

        <div class="modal-body">
          <div class="form-group">
            <label class="form-label"></label>
            <input
              v-model="formData.nickname"
              type="text"
              class="form-input"
              placeholder="请输入昵称"
              maxlength="20"
            />
          </div>

          <div class="form-group">
            <label class="form-label">个人</label>
            <textarea
              v-model="formData.bio"
              class="form-textarea"
              placeholder="介绍一下自己吧..."
              maxlength="200"
              rows="4"
            ></textarea>
            <span class="char-count">{{ formData.bio?.length || 0 }}/200</span>
          </div>

          <div class="form-group">
            <label class="form-label">所</label>
            <input
              v-model="formData.location"
              type="text"
              class="form-input"
              placeholder="你所在的城市"
              maxlength="50"
            />
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-cancel" @click="handleClose">
            取消
          </button>
          <button class="btn btn-save" @click="handleSave">
            保存
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from 'vue';
import CloseIcon from '../../../../icons/common/CloseIcon.vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  userData: {
    type: Object,
    default: () => ({
      nickname: '',
      bio: '',
      location: ''
    })
  }
});

const emit = defineEmits(['close', 'save']);

const formData = ref({
  nickname: '',
  bio: '',
  location: ''
});

watch(() => props.visible, (newVal) => {
  if (newVal) {
    formData.value = {
      nickname: props.userData.nickname || '',
      bio: props.userData.bio || '',
      location: props.userData.location || ''
    };
  }
}, { immediate: true });

watch(() => props.userData, (newData) => {
  if (props.visible) {
    formData.value = {
      nickname: newData.nickname || '',
      bio: newData.bio || '',
      location: newData.location || ''
    };
  }
}, { deep: true });

const handleClose = () => {
  emit('close');
};

const handleSave = () => {
  emit('save', { ...formData.value });
};
</script>

<style src="./index.scss" lang="scss"></style>
