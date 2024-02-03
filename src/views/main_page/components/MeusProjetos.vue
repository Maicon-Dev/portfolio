<template>
  <div class="projects">
    <h1> Meus projétos </h1>
    <div class="projects__list">
      <CustomContainer v-for="(repository, index) in myRepositories" :key="repository.id" secondary
        class="projects__item">
        <template #header>
        </template>
        <template #body>
          <div>
            <h3>{{ repository.name }}</h3>
            <p class="projects__details">
              {{ repository.description }}
            </p>
          </div>
        </template>
        <template #footer>
          <div>
            <div class="projects__languages">
              <div v-for="languages in Object.keys(languagesListAllRepositories[index].data)" :key="languages">
                <CustomChips>
                  <template #content>
                    {{ languages }}
                  </template>
                </CustomChips>
              </div>
            </div>
            <div class="projects__links">
              <a :href="repository.html_url" target="_blank" rel="noopener noreferrer" class="contact">
                <v-img alt="Github" contain :src="require('@/assets/github.svg')" width="40" />
              </a>
              <a v-if="repository.homepage" id="site" :href="repository.homepage" target="_blank" rel="noopener noreferrer"
                class="contact">
                <v-img alt="Site" contain :src="require('@/assets/site.svg')" width="38" />
              </a>
            </div>
          </div>
        </template>
      </CustomContainer>
    </div>
  </div>
</template>

<script setup>
import CustomContainer from '@/components/CustomContainer.vue'
import CustomChips from '@/components/CustomChips.vue'
import { ref } from 'vue'

import { Octokit } from "octokit";

const octokit = new Octokit({})
const myRepositories = ref(null)
const languagesListAllRepositories = ref(null)
const isLoading = ref(false)

async function getPublicRepositories() {
  isLoading.value = true
  const responseRepos = await octokit.request('GET /users/Maicon-Dev/repos', {
    username: 'Maicon-Dev',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  languagesListAllRepositories.value = await Promise.all(responseRepos.data.map(repo =>
    octokit.request('GET /repos/{owner}/{repo}/languages', {
      owner: 'Maicon-Dev',
      repo: repo.name,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
  ))
  myRepositories.value = responseRepos.data
  console.log(myRepositories)
  isLoading.value = false
}

getPublicRepositories()
</script>

<style lang="sass" scoped>
.projects
  width: 100%
  padding: 20px 40px
  line-height: normal
  font-style: normal
  &__list
    display: flex
    margin-top: 20px
    overflow-x: scroll
    padding-bottom: 20px
    margin-bottom: 40px
  &__item
    display: flex
    flex-direction: column
    justify-content: space-between
    margin-right: 20px
    width: 20%
    height: 300px
    &:last-child
      margin-right: 0px
  &__details
    color: #FFFFFF80
    font-size: 14px
    font-weight: 400
    text-align: justify
    padding: 10px 0
  &__languages
    display: flex
  &__links
    display: flex
    margin-top: 20px
    align-items: center
    justify-content: space-between
    flex-direction: row-reverse
  #site
    display: flex
    align-items: center
    span
      margin-left: 10px
</style>
