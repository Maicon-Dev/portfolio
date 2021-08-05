<template>
	<v-content class="pt-0 d-flex d-sm-none">
		<v-row class="my-0" v-for="projeto in repositorio.data" :key="projeto">
			<v-col>
				<v-card id="card" color="rgb(68, 26, 97)" dark max-width="400">
					<v-card-title>
						<v-icon left> mdi-github </v-icon>
						<span class="text-h6 font-weight-bold"> {{ projeto.name }}</span>
					</v-card-title>

					<v-card-text class="text-h5 font-weight-light">
						<div v-if="projeto.description != null">
							{{ projeto.description }}
						</div>
						<div v-else>Ainda não possui uma descrição.</div>
					</v-card-text>

					<v-card-actions id="actions">
            <div>
              <v-btn
                v-if="projeto.homepage != null"
                :href="projeto.homepage"
                color="purple"
                rounded
              >
                Acessar demo
              </v-btn>
              <v-btn v-else disabled color="purple" rounded>
                Não possui demo
              </v-btn>
            </div>

						<v-btn :href="projeto.svn_url" icon>
							<v-icon large> mdi-github </v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-content>
</template>

<script>
	export default {
		props: {
			repositorio: [],
		},
	};
</script>

<style>
  #card {
    border-radius: 17px;
  }

  #actions {
    display: flex;
    justify-content: space-between;
  }
</style>