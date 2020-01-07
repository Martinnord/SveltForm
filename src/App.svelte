<script>
	import { svelteForm } from "./svelte-form"

	const { handleChange, state, handleSubmit } = svelteForm({
		initialValues: {
			username: "",
			email: "",
			password: "",

		}
	})

</script>

<style>
</style>

<main>
  <div style="display: flex;">
	<form on:submit={handleSubmit}>
		<div style="display: flex; flex-direction: column">
			<input on:change={handleChange} bind:value={$state.username} name="username" placeholder="username"/>
			<input on:change={handleChange} bind:value={$state.email} name="email" placeholder="email"/>
			<input on:change={handleChange} bind:value={$state.password} name="password" placeholder="password"/>
			<button type="submit">submit</button>
		</div>
	</form>
  </div>
</main>