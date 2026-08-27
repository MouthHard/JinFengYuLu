<template>
  <div v-if="visible" class="modal-overlay" @click.self="handleClose">
    <div class="edit-profile-modal">
      <div class="modal-header">
        <h2 class="modal-title">编辑资料</h2>
        <button class="close-btn" @click="handleClose">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div class="modal-body">
        <div class="form-section basic-info-section">
          <div class="basic-info-grid">
            <div class="avatar-column">
              <div class="avatar-preview">
                <img
                  v-if="formData.avatar"
                  :src="formData.avatar"
                  alt="avatar"
                />
                <div v-else class="avatar-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              <button class="upload-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span>更换头像</span>
              </button>
            </div>
            <div class="info-column">
              <div class="form-field">
                <label class="field-label">用户名</label>
                <input
                  v-model="formData.name"
                  type="text"
                  class="field-input"
                  placeholder="输入用户名"
                  maxlength="30"
                />
              </div>
              <div class="form-field">
                <label class="field-label">副标题</label>
                <input
                  v-model="formData.title"
                  type="text"
                  class="field-input"
                  placeholder="一句话介绍自己"
                  maxlength="50"
                />
              </div>
            </div>
          </div>
          <div class="bio-section">
            <label class="field-label">个人简介</label>
            <textarea
              v-model="formData.bio"
              class="field-textarea"
              placeholder="分享你的摄影故事、兴趣爱好或创作理念..."
              maxlength="200"
              rows="3"
            ></textarea>
            <div class="char-count">{{ formData.bio?.length || 0 }}/200</div>
          </div>
          <div class="location-website-section">
            <div class="form-row">
              <div class="form-field">
                <label class="field-label">所在位置</label>
                <ElCascader
                  v-model="locationValue"
                  :options="chinaRegions"
                  :props="{
                    expandTrigger: 'hover',
                    checkStrictly: false,
                    emitPath: true,
                    value: 'value',
                    label: 'label',
                    children: 'children',
                  }"
                  placeholder="选择省/市/区"
                  class="field-input location-cascader"
                  popper-class="dark-cascader-popper"
                  clearable
                  @change="handleLocationChange"
                />
              </div>
              <div class="form-field">
                <label class="field-label">个人网站</label>
                <div class="input-with-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path
                      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    />
                  </svg>
                  <input
                    v-model="formData.website"
                    type="url"
                    class="field-input"
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-section photography-section">
          <label class="section-label photography-label">摄影信息</label>
          <div class="photography-grid">
            <div class="form-field">
              <label class="field-label">相机型号</label>
              <input
                v-model="formData.photography.camera"
                type="text"
                class="field-input photography-input"
                placeholder="例如：Sony A7R4"
              />
            </div>
            <div class="form-field">
              <label class="field-label">常用镜头</label>
              <input
                v-model="formData.photography.lens"
                type="text"
                class="field-input photography-input"
                placeholder="例如：24-70mm f/2.8"
              />
            </div>
          </div>
          <div class="specialty-section">
            <label class="field-label">擅长领域</label>
            <div class="specialty-tags">
              <label
                v-for="specialty in specialtyOptions"
                :key="specialty"
                class="specialty-tag"
                :class="{
                  active: formData.photography.specialties.includes(specialty),
                }"
              >
                <input
                  type="checkbox"
                  :checked="
                    formData.photography.specialties.includes(specialty)
                  "
                  class="specialty-checkbox"
                  @change="toggleSpecialty(specialty)"
                />
                <span>{{ specialty }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="form-section tags-section">
          <label class="section-label tags-label">兴趣标签</label>
          <div class="tags-input">
            <div class="tags-container">
              <span
                v-for="(tag, index) in formData.tags"
                :key="index"
                class="tag-item"
              >
                {{ tag }}
                <button class="tag-remove" @click="removeTag(index)">×</button>
              </span>
            </div>
            <input
              v-model="tagInput"
              type="text"
              class="tag-input"
              placeholder="输入标签后按回车添加"
              @keydown.enter="addTag"
            />
          </div>
          <div class="tag-suggestions">
            <span class="suggestion-label">推荐标签：</span>
            <button
              v-for="tag in availableSuggestedTags"
              :key="tag"
              class="suggestion-btn"
              @click="addSuggestedTag(tag)"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <div class="form-section contact-section">
          <label class="section-label contact-label">联系方式</label>
          <div class="contact-grid">
            <div class="form-field">
              <label class="field-label">电子邮箱</label>
              <div class="input-with-icon email-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  v-model="formData.contact.email"
                  type="email"
                  class="field-input contact-input"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div class="form-field">
              <label class="field-label">联系电话</label>
              <div class="input-with-icon phone-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
                <input
                  v-model="formData.contact.phone"
                  type="tel"
                  class="field-input contact-input"
                  placeholder="选填"
                />
              </div>
            </div>
          </div>
          <div class="social-links">
            <div class="social-item">
              <div class="social-icon weibo">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M20.194 14.258c-1.64-1.64-4.17-2.08-6.32-1.16l-.14.06c-.38.17-.55.62-.38 1 .17.38.62.55 1 .38l.14-.06c1.52-.68 3.39-.38 4.6.84l.06.06c.28.28.28.74 0 1.02s-.74.28-1.02 0l-.06-.06c-.84-.84-2.18-.84-3.02 0l-.06.06c-.28.28-.74.28-1.02 0s-.28-.74 0-1.02l.06-.06c1.52-1.52 3.98-1.52 5.5 0l.06.06c.56.56.56 1.48 0 2.04l-.06.06c-1.52 1.52-3.98 1.52-5.5 0-.28-.28-.28-.74 0-1.02s.74-.28 1.02 0c.84.84 2.18.84 3.02 0l.06-.06c.28-.28.28-.74 0-1.02z"
                  />
                </svg>
              </div>
              <input
                v-model="formData.social.weibo"
                type="text"
                class="social-input"
                placeholder="微博用户名"
              />
            </div>
            <div class="social-item">
              <div class="social-icon wechat">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M8.691 2.638C4.97 2.638 1.95 5.39 1.95 8.78c0 2.09 1.14 3.92 2.88 5.02l-.69 2.12 2.47-1.26c.65.2 1.35.31 2.08.31 3.72 0 6.74-2.75 6.74-6.14S12.41 2.638 8.691 2.638zm8.618 6.742c-3.72 0-6.74 2.75-6.74 6.14 0 2.09 1.14 3.92 2.88 5.02l-.69 2.12 2.47-1.26c.65.2 1.35.31 2.08.31 3.72 0 6.74-2.75 6.74-6.14s-3.02-6.19-6.74-6.19z"
                  />
                </svg>
              </div>
              <input
                v-model="formData.social.wechat"
                type="text"
                class="social-input"
                placeholder="微信号"
              />
            </div>
            <div class="social-item">
              <div class="social-icon bilibili">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M17.813 4.65h-3.125l2.5-2.5c.3-.3.3-.8 0-1.1s-.8-.3-1.1 0l-3.6 3.6H7.413l-3.6-3.6c-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1l2.5 2.5H2.087C.937 4.65 0 5.587 0 6.737v9.575c0 1.15.937 2.088 2.087 2.088h15.725c1.15 0 2.088-.937 2.088-2.088V6.737c0-1.15-.937-2.087-2.088-2.087z"
                  />
                </svg>
              </div>
              <input
                v-model="formData.social.bilibili"
                type="text"
                class="social-input"
                placeholder="B站用户名"
              />
            </div>
            <div class="social-item">
              <div class="social-icon xiaohongshu">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </div>
              <input
                v-model="formData.social.xiaohongshu"
                type="text"
                class="social-input"
                placeholder="小红书ID"
              />
            </div>
            <div class="social-item">
              <div class="social-icon mafengwo">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  />
                </svg>
              </div>
              <input
                v-model="formData.social.mafengwo"
                type="text"
                class="social-input"
                placeholder="马蜂窝账号"
              />
            </div>
            <div class="social-item">
              <div class="social-icon tuchong">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="3" />
                  <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                  />
                </svg>
              </div>
              <input
                v-model="formData.social.tuchong"
                type="text"
                class="social-input"
                placeholder="图虫账号"
              />
            </div>
            <div class="social-item">
              <div class="social-icon instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" />
                </svg>
              </div>
              <input
                v-model="formData.social.instagram"
                type="text"
                class="social-input"
                placeholder="Instagram账号"
              />
            </div>
          </div>
        </div>

        <div class="form-section privacy-section">
          <label class="section-label">隐私设置</label>
          <div class="privacy-options">
            <label class="checkbox-item">
              <input
                v-model="formData.privacy.showLocation"
                type="checkbox"
                class="checkbox-input"
              />
              <span class="checkbox-custom"></span>
              <span class="checkbox-label">公开我的位置信息</span>
            </label>
            <label class="checkbox-item">
              <input
                v-model="formData.privacy.showSocialLinks"
                type="checkbox"
                class="checkbox-input"
              />
              <span class="checkbox-custom"></span>
              <span class="checkbox-label">公开我的社交媒体</span>
            </label>
            <label class="checkbox-item">
              <input
                v-model="formData.privacy.allowMessages"
                type="checkbox"
                class="checkbox-input"
              />
              <span class="checkbox-custom"></span>
              <span class="checkbox-label">允许他人发送私信</span>
            </label>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="cancel-btn" @click="handleClose">取消</button>
        <button
          class="save-btn"
          :class="{ disabled: !hasChanges }"
          :disabled="!hasChanges"
          @click="handleSave"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>保存修改</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, computed, watch } from 'vue';
  import { ElCascader, ElMessageBox } from 'element-plus';
  import 'element-plus/es/components/select/style/css';
  import 'element-plus/es/components/cascader/style/css';
  import 'element-plus/es/components/message-box/style/css';
  import 'element-plus/es/components/popper/style/css';
  import 'element-plus/es/components/popper/style/index';
  import 'element-plus/es/components/scrollbar/style/css';
  import { chinaRegions } from '@/utils/landscape/chinaRegions';
  import { ProfileSpecialtyOptions } from '@/utils/landscape/constants';

  interface EditableUser {
    name?: string;
    title?: string;
    bio?: string;
    location?: string;
    avatar?: string;
    tags?: string[];
    verified?: boolean;
  }

  interface Props {
    visible: boolean;
    user: EditableUser;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<{
    'update:visible': [value: boolean];
    save: [data: EditableUser];
  }>();

  const tagInput = ref('');
  const locationValue = ref<string[]>([]);

  const getInitialFormData = () => ({
    avatar: props.user.avatar || '',
    name: props.user.name || '',
    title: props.user.title || '',
    bio: props.user.bio || '',
    location: props.user.location || '',
    website: '',
    tags: [...(props.user.tags || [])],
    photography: {
      camera: '',
      lens: '',
      experience: '',
      specialties: [] as string[],
    },
    contact: {
      email: '',
      phone: '',
    },
    social: {
      weibo: '',
      wechat: '',
      bilibili: '',
      xiaohongshu: '',
      mafengwo: '',
      tuchong: '',
      instagram: '',
    },
    privacy: {
      showLocation: true,
      showSocialLinks: true,
      allowMessages: true,
    },
  });

  const formData = reactive(getInitialFormData());
  const initialData = ref(JSON.stringify(getInitialFormData()));

  const specialtyOptions = ProfileSpecialtyOptions;

  const handleLocationChange = (value: any) => {
    if (Array.isArray(value) && value.length > 0) {
      formData.location = value.join('·');
    } else {
      formData.location = '';
    }
  };

  watch(
    () => props.visible,
    (newVal) => {
      if (newVal) {
        const fresh = getInitialFormData();
        Object.assign(formData, fresh);
        initialData.value = JSON.stringify(fresh);
      }
    },
  );

  const suggestedTags = [
    '风光',
    '星空',
    '城市',
    '夜景',
    '自然',
    '人文',
    '建筑',
    '纪实',
  ];

  const availableSuggestedTags = computed(() => {
    return suggestedTags.filter((tag) => !formData.tags.includes(tag));
  });

  const hasChanges = computed(() => {
    return JSON.stringify(formData) !== initialData.value;
  });

  const addTag = () => {
    const tag = tagInput.value.trim();
    if (tag && !formData.tags.includes(tag) && formData.tags.length < 10) {
      formData.tags.push(tag);
      tagInput.value = '';
    }
  };

  const removeTag = (index: number) => {
    formData.tags.splice(index, 1);
  };

  const addSuggestedTag = (tag: string) => {
    if (!formData.tags.includes(tag) && formData.tags.length < 10) {
      formData.tags.push(tag);
    }
  };

  const toggleSpecialty = (specialty: string) => {
    const index = formData.photography.specialties.indexOf(specialty);
    if (index > -1) {
      formData.photography.specialties.splice(index, 1);
    } else if (formData.photography.specialties.length < 5) {
      formData.photography.specialties.push(specialty);
    }
  };

  const handleClose = () => {
    emit('update:visible', false);
  };

  const handleSave = async () => {
    if (!hasChanges.value) return;

    try {
      await ElMessageBox.confirm('确定要保存修改吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'dark-confirm-dialog',
      });
      emit('save', formData);
      handleClose();
    } catch {
      // 用户点击取消
    }
  };
</script>

<style lang="scss">
.edit-profile-modal .location-cascader :deep(.el-input__wrapper),
.edit-profile-modal .experience-select :deep(.el-input__wrapper) {
  background: linear-gradient(180deg, rgba(26, 31, 46, 0.98) 0%, rgba(15, 20, 32, 0.99) 100%) !important;
  border: 1px solid rgba(82, 160, 255, 0.5) !important;
  border-radius: 10px !important;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(82, 160, 255, 0.1) !important;
  padding: 4px 16px !important;
  --el-input-bg-color: transparent !important;
  --el-input-border-color: rgba(82, 160, 255, 0.5) !important;
  --el-input-text-color: #fff !important;
  --el-input-placeholder-color: rgba(255, 255, 255, 0.5) !important;

  &::after {
    display: none !important;
  }
}

.edit-profile-modal .location-cascader :deep(.el-input__inner),
.edit-profile-modal .experience-select :deep(.el-input__inner) {
  color: #fff !important;
  font-size: 14px;
  font-weight: 500;
  background: transparent !important;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5) !important;
    font-weight: 400;
  }
}

.edit-profile-modal .location-cascader :deep(.el-input__icon),
.edit-profile-modal .experience-select :deep(.el-input__icon) {
  color: rgba(82, 160, 255, 0.9) !important;
}

/* 暗色确认对话框样式 */
.dark-confirm-dialog {
  background: linear-gradient(180deg, rgba(26, 31, 46, 0.98) 0%, rgba(15, 20, 32, 0.99) 100%) !important;
  border: 1px solid rgba(82, 160, 255, 0.3) !important;
  border-radius: 12px !important;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(82, 160, 255, 0.15) !important;

  .el-message-box__header {
    border-bottom: 1px solid rgba(82, 160, 255, 0.15) !important;

    .el-message-box__title {
      color: #fff !important;
      font-weight: 600;
    }

    .el-message-box__headerbtn {
      .el-message-box__close {
        color: rgba(255, 255, 255, 0.7) !important;
        transition: color 0.2s ease;

        &:hover {
          color: #fff !important;
        }
      }
    }
  }

  .el-message-box__content {
    .el-message-box__message {
      color: rgba(255, 255, 255, 0.9) !important;
    }

    .el-icon {
      color: rgba(250, 173, 20, 0.9) !important;
    }
  }

  .el-message-box__btns {
    .el-button {
      background: transparent !important;
      border: 1px solid rgba(82, 160, 255, 0.3) !important;
      color: #fff !important;
      border-radius: 8px !important;
      transition: all 0.2s ease !important;

      &:hover {
        border-color: rgba(82, 160, 255, 0.6) !important;
        background: rgba(82, 160, 255, 0.1) !important;
      }

      &--primary {
        background: linear-gradient(135deg, rgba(13, 148, 136, 0.9) 0%, rgba(14, 165, 233, 0.9) 100%) !important;
        border: none !important;
        color: #fff !important;
        box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3) !important;

        &:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(14, 165, 233, 0.4) !important;
        }
      }
    }
  }
}
</style>

<style scoped lang="scss" src="./index.scss" />
