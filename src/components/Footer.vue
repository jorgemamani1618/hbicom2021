<template>
  <div class="">
    <div class="footer">
      <div class="contact-form">
        <h3 class="title-footer">Questions?</h3>
        <div class="container form">
          <form @submit.prevent="sendEmail">
            <div class="field">
              <label for="name" class="label is-size-4 has-text-weight-light" />
              <div class="control has-icons-left">
                <input type="text" v-model="contacto.user_name" name="user_name" id="name" class="input" placeholder="Name" />
                <div class="error" v-if="submited && !$v.contacto.user_name.required">This field is neccesary </div>
                <div class="error" v-if="submited && !$v.contacto.user_name.minLength">This field must be at least 6 characters long</div>
              </div>
            </div>

            <div class="field">
              <label for="email" class="label is-size-4 has-text-weight-light" />
              <div class="control has-icons-left">
                <input type="email" v-model="contacto.user_email" name="user_email" id="email" class="input" placeholder="Email" />
                <div class="error" v-if="submited && !$v.contacto.user_email.required">This field is neccesary </div>
                <div class="error" v-if="submited && !$v.contacto.user_email.email">You must enter a valid email</div>
              </div>
            </div>

            <div class="field">
              <label for="message" class="label is-size-4 has-text-weight-light" />
              <textarea name="message" v-model="contacto.user_message" id="message" rows="5" class="textarea is-medium" placeholder="Message" />
              <div class="error" v-if="submited && !$v.contacto.user_message.required">This field is neccesary </div>
              <div class="error" v-if="submited && !$v.contacto.user_message.minLength">This field must be at least 10 characters long</div>
              <div class="error" v-if="submited && !$v.contacto.user_message.maxLength">This field must be 240 characters maximum</div>
            </div>
            <input type="submit" value="Send Message" class="button is-success is-size-5" href="/Home">
          </form>
          <p class="confirmation" v-if="confirmation_flag">Message sent succesfully </p>
        </div>
      </div>



      <div class="location">
        <h3 class="title-footer">Location</h3>
        <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3827.3669263358806!2d-71.52426306745912!3d-16.40618087098516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea151a196823e2fc!2sEscuela%20Profesional%20de%20Ingenieria%20Electr%C3%B3nica!5e0!3m2!1ses-419!2spe!4v1603576874315!5m2!1ses-419!2spe"
          width="auto"
          height="300"
          frameborder="0"
          frame-style
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <div class="contact-us">
        <h3 class="title-footer">Contact us</h3>
        <div class="container-contacto">
          <img
            src="../assets/logos/icons-contacto-06.svg"
            alt=""
            class="img-contacto"
          />
          <h4 class="info">congreso@hbicom.org</h4>
        </div>
        <div class="container-contacto">
          <img
            src="../assets/logos/icons-contacto-06.svg"
            alt=""
            class="img-contacto"
          />
          <h4 class="info">callforpapers@hbicom.org</h4>
        </div>
        <div class="container-contacto">
          <img
            src="../assets/logos/icons-contacto-07.svg"
            alt=""
            class="img-contacto"
          />
          <h4 class="info">+51 994 433 565</h4>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="separador"></div>
      Copyright © HBICOM Todos los Derechos Reservados
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import {required, minLength, email, maxLength} from '../../node_modules/vuelidate/lib/validators';

export default {

  name: "footercomponent",
  data() {
    return {
      submited: false,
      contacto: {
        user_name: '',
        user_email: '',
        user_message: ''
      },
      confirmation_flag: false,
      msg: "Welcome to Footer",
      searchText:"Default",
    };
  },
  methods: {
    procesar() {
      this.submited = true;
      this.$v.$touch();
      if(this.$v.$invalid){
        return false;
      }
    },
    sendEmail: function(e) {
        this.submited = true;
      this.$v.$touch();
      if(this.$v.$invalid){
        return false;
      }
        emailjs.sendForm('service_p91jk5c','template_i4gyexd', e.target, 'user_FAbn9HEL5z1bYqyn2hv5B')
        .then((result) => {
          this.confirmation_flag = true;
            console.log('SUCCESS!', result.status, result.text);
            console.log(this.confirmation_flag);
            this.contacto.user_name = '';
            this.contacto.user_email = '';
            this.contacto.user_message = '';
            this.submited = false;

        }, (error) => {
            console.log('FAILED...', error);
        });
    },
  },
  validations: {
      contacto: {
        user_name: {
          required,
          minLength: minLength(6),
        },
        user_email: {
          required,
          email,
        },
        user_message: {
          required,
          minLength: minLength(10),
          maxLength: maxLength(240),
        }
      }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/stylesmain.css";
.footer {
  background-color: var(--dark-primary);
  height: auto;
  display: flex;
  margin: 0;
  justify-content: space-around;
  padding-top: 1rem;
  padding-bottom: 2rem;
  flex-direction: column;
}

/* -------- Contact Form---------- */

.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.container.form {
  width: 70%;
}
.confirmation {
  text-align: left;
  color: var(--white);
  padding: 10px;
  /*border-style: solid;
  border-color:var(--white);
  border-width: 1px;*/
}
.error {
  text-align: left;
  font-weight: bold;
  font-style: italic;
  color: var(--error);
  padding-left: 10px;
  padding-bottom: 10px;
}

.field {
  background: be;
  width: 100%;
  margin: 0;
  padding: 0;
}

.input {
  width: 90%;
  background-color: var(--white);
  border-style: none;
  height: 1.5rem;
  margin: 0.5rem 0;
  padding: 0.5rem 5%;
}

.textarea.is-medium {
  width: 90%;
  height: 10rem;
  background-color: var(--white);
  border-style: none;
  margin: 0.5rem 0;
  padding: 0.5rem 5%;
}
.button.is-success.is-size-5 {
  width: 100%;
  height: 2.5rem;
  background-color: var(--secondary1);
  border-style: none;
  cursor: pointer;
  margin: 0.5rem 0;
  color: var(--white);
}


/* -------- Mapa incrustado---------- */
.location {
  width: 100%;
}

.map {
  background-color: var(--white);
  padding: 0;
  width: 80%;
}

/* -------- Info de Contacto ---------- */
.contact-us {
  width: 100%;
 
}
.container-contacto{
  display:flex;
  margin:0 2rem;
 

}
.info {
  color: var(--white);
  font-weight: 500;
  margin: 1rem;
}
.img-contacto{
  width:2rem;
}

/* -------- Varios---------- */

h3 {
  margin: 0;
}
.title-footer {
  color: var(--primary);
  margin: 2rem 0 2rem 0;
  font-size: 1.5rem;
}
.copyright {
  background-color: var(--dark-primary);
  color: var(--white);
  padding: 2rem 0 2rem 0;
}
.separador {
  width: 90%;
  height: 1px;
  background-color: var(--white);
  margin: 0 5% 2rem 5%;
}

@media only screen and (min-width: 600px) {
  .footer {
    flex-direction: row;
  }
  .contact-form,
  .location,
  .contact-us {
    width: 30%;
  }

  .container-contacto{
  display:flex;
  margin:0 6rem;
 

}
 
}
</style>
