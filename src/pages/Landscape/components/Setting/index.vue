<template>
  <div class="setting-page">
    <div class="setting-container">
      <div class="setting-header">
        <div class="header-content">
          <div class="header-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <path
                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
              />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div class="header-title">
            <h1>设置</h1>
            <p>个性化你的风光摄影之旅</p>
          </div>
        </div>
      </div>
      <div class="setting-content">
        <SettingSidebar
          :activeSection="activeSection"
          @change="activeSection = $event"
        />
        <main class="setting-main">
          <AccountSection v-if="activeSection === 'account'" />
          <PhotographySection v-if="activeSection === 'photography'" />
          <UploadSection v-if="activeSection === 'upload'" />
          <AppearanceSection v-if="activeSection === 'appearance'" />
          <CopyrightSection v-if="activeSection === 'copyright'" />
          <NotificationsSection v-if="activeSection === 'notifications'" />
          <SocialSection v-if="activeSection === 'social'" />
          <PrivacySection v-if="activeSection === 'privacy'" />
          <AboutSection v-if="activeSection === 'about'" />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import SettingSidebar from './components/SettingSidebar/index.vue'
  import AccountSection from './components/AccountSection/index.vue'
  import PhotographySection from './components/PhotographySection/index.vue'
  import UploadSection from './components/UploadSection/index.vue'
  import AppearanceSection from './components/AppearanceSection/index.vue'
  import CopyrightSection from './components/CopyrightSection/index.vue'
  import NotificationsSection from './components/NotificationsSection/index.vue'
  import SocialSection from './components/SocialSection/index.vue'
  import PrivacySection from './components/PrivacySection/index.vue'
  import AboutSection from './components/AboutSection/index.vue'

  const activeSection = ref('account');
</script>

<style lang="scss" src="./index.scss"></style>
