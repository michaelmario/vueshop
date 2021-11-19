<template>
  <div>
		<form class="bg-white rounded" @submit.prevent>			
			<div class="p-5">
        <h3 class="text-center my-3">S'inscrire</h3>
				<div class="mb-2">
					<div class="d-flex">
             <b-icon icon="file-person" class="mt-2 mr-1 fs-4 "></b-icon>					
						<input v-model.trim="nickname" minlength="3" type="text" placeholder="SurNom" class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"/>
            <b-icon icon="file-person-fill" :style="{color: isNickNameValid ? 'green' : 'red'}" class="mt-2 mr-1 fs-4 "></b-icon>
          </div>
				</div>
        <div class="mb-2">
					<div class="d-flex">
             <b-icon icon="person-fill" class="mt-2 mr-1 fs-4 "></b-icon>	
						<input v-model.trim="name" type="text" placeholder="Nom" class="-mx-6 px-8 border rounded px-3 py-2 text-gray-700"/>
            <b-icon icon="person-check-fill" :style="{color: isNameValid ? 'green' : 'red'}"></b-icon>
					</div>
				</div>
        <div class="mb-2">
					<div class="d-flex">
             <b-icon icon="envelope-fill" class="mt-2 mr-1 fs-4 "></b-icon>
							<input v-model.trim="email" type="email" placeholder="email" class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"/>
            <b-icon icon="envelope-open-fill" class="mt-2 ml-2 fs-4" :style="{color: isEmailValid ? 'green' : 'red'}"></b-icon>
					</div>
				</div>
				<div class="mb-2">
					<div class="d-flex">
             <b-icon icon="lock-fill" class="mt-2 mr-1 fs-4"></b-icon>
							<input v-model="password" :class='{valid:passwordValidation.valid}' type="password" placeholder="password" class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"/>
             <b-icon icon="check-circle-fill" class="mt-2 ml-2 fs-4" :style="{color: passwordValidation.valid ? 'green' : 'red'}">
              <span v-for="(error, index) in passwordValidation.errors" :key="index" class="bg-blue-200 rounded"></span></b-icon>
            
					</div>
				</div>
        <div class="w-full mb-2">
					<div class="d-flex  mb-3">
						<b-icon icon="lock-fill" class="mt-2 mr-1 fs-4"></b-icon>
						<input v-model.trim="checkPassword" type="password" placeholder="confirm password" class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"/>
            <b-icon icon="check-circle-fill" class="mt-2 ml-2 fs-4" :style="{color: passwordsFilled && samePasswords ? 'green' : 'red'}">
              <span v-if="passwordValidation.errors.length === 0 && passwordsFilled && !samePasswords" key="passmatch" class="bg-blue-200 rounded"></span>
          </b-icon>
					</div>
           <span class="text-muted pt-5">( Le mot de passe doit contenir : {{passwordRules.map(rule => rule.message).join(', ')}})</span>
				</div>
				<p v-if="statusMessage" class="text-md text-red-400 pb-4">{{ statusMessage }}</p>
				<div class="mt-8 flex justify-evenly">
					<button @click="cancel()" class="btn btn-danger text-xs mr-1  font-bold py-2 px-4 rounded">
						Cancel
					</button>
          <button @click="signup()" class="btn btn-success text-xs ml-1 font-bold py-2 px-4 rounded ">
           S'inscrire
					</button>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
import {passwordRules, emailRegex} from '../data/rules'
export default {
  name: 'SignUpForm',
  data() {
    return {
      nickname: '',
			name: '',
			email: '',
			password: '',
			checkPassword: '',
      passwordVisible: false,
      submitted: false,
      user:{}
    }
  },
  props: {
    status: {
      type: Object,
      default: () => {}
    },
  },
  computed: {
    statusMessage() {
      return this.status?.message;
    },
    passwordsFilled () {
			return this.password && this.checkPassword;
		},
    samePasswords () {
      return this.passwordsFilled ? this.password === this.checkPassword : false;
		},
		passwordValidation () {
			let errors = [];
			for (let condition of this.passwordRules) {
				if (!condition.regex.test(this.password)) {
					errors.push(condition.message);
				}
      }
      return { valid: (errors.length === 0), errors };
    },
    enableSignUp () {
      return this.isNickNameValid && 
        this.isNameValid && 
        this.isEmailValid && 
        this.passwordsFilled && 
        this.samePasswords && 
        this.passwordValidation.valid;
    },
    isEmailValid() {
      return this.email && this.emailRegex.test(this.email);
    },
    isNickNameValid() {
      return this.nickname && this.nickname.length >= 3;
    },
    isNameValid() {
      return this.name && this.name.length >= 3;
    }
  },
  methods: {
    signup() {
      if(this.enableSignUp) {
        this.submitted = true;
        this.$emit('do-signup', {
          nickname: this.nickname,
          name: this.name,
          email: this.email,
          password: this.password
        });
      }
    },
    cancel() {
      this.nickname = '';
      this.name = '';
      this.email = '';
      this.password = '';
      this.$emit('do-cancel');
    },
		togglePasswordVisibility() {
			this.passwordVisible = !this.passwordVisible
    }
  },
  created() {
    this.emailRegex = emailRegex;
    this.passwordRules = passwordRules;
  }
}
</script>
