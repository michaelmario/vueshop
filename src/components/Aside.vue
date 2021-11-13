<template>
 <transition name="cart-anim">
  <div class="outer-cart-wrapper">
    <div class="carty--loading th-removed">
      <div id="rect-1" class="rect"></div>
      <div id="rect-2" class="rect"></div>
      <div id="rect-3" class="rect"></div>
      <span class="visuallyhidden">Loading Cart Contents</span>
    </div>
    <div class="cart-wrapper">
      <button class="btn btn-outline-success carty--close" @click="close()">
        <span>Fermer</span>
      </button>
      <div></div>
      <p class="headline">Votre Cart</p>
      <!-- This is the outer container for each item in the cart -->
      <section class="carty--empty" v-if="cart.length === 0">
        <h2>Votre cart est vide</h2>
        <p>
          <a href="#" class="carty--close" @click="close()"
            >Continuer vos achats</a
          >
        </p>
      </section>
      <section class="dataCart">       
          <div v-if="cart.length > 0" class="shopping-cart" id="shopping-cart">
            <transition-group name="item-anim" tag="div" class="item-group">
              <div
                v-for="(commande, id) in cart"
                class="item"
                :key="commande.id"
              >
                <div class="img-container">
                  <img
                    :src="commande.image"
                    class="imageAvatar"
                  >
                </div>

                <div class="item-description">
                  <h5>{{ commande.title }}</h5>
                  <p>{{ commande.price }}€</p>
                </div>

                <div class="item-quantity">
                  <h5>quantity: {{ commande.quantity }}</h5>

                  <div class="cart-icons">
                    <span
                      class="w3-button w3-circle btn-success"
                      v-on:click="cartPlusOne(commande)"
                    >
                      <b-icon icon="plus-circle-fill"></b-icon>
                    </span>
                    <span
                      class="w3-button w3-circle btn-dark"
                      v-on:click="cartMinusOne(commande, id)"
                    >
                      <b-icon icon="file-minus-fill"></b-icon>
                    </span>
                    <span
                      class="w3-button w3-circle btn-danger"
                      @click="cartRemoveItem(id)"
                    >
                      <b-icon icon="trash-fill"></b-icon>
                    </span>
                  </div>
                </div>
              </div>
            </transition-group>
            <div class="grand-total">
              <div class="total">
                <h2>Total</h2>
                <h2>{{ cartTotalAmount }} €</h2>
              </div>
              <h6>Total articles: {{ itemTotalAmount }}</h6>
            </div>
            <div class="order-button">
              <button class="btn btn-outline-success">Acheter Maintenant</button>
            </div>
            <p>
        <a href="#" class="cartyClose text-center mt-5 mb-5" @click="close()"
          >Continuer vos achats</a
        >
      </p>
          </div>
        
        
      </section>
      
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  name: "Aside",

  data() {
    return {
      active: false,
      Prices: "",
      liked: [],
      cart: [],
      Total: [],   
      commandes: [],
      commande: {},
    };
  },
  methods: {
    close() {
      document.querySelector(".outer-cart-wrapper").classList.remove("active");
    },       
    addToCart(commande) {
      // check if already in array
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === commande.id) {
          return this.cart[i].quantity++;
        }
      }
      this.cart.push({
        id: commande.id,
        img: commande.img,
        description: commande.description,
        price: commande.price,
        quantity: 1,
      });
    },
    cartPlusOne(commande) {
      commande.quantity = commande.quantity + 1;
    },
    cartMinusOne(commande, id) {
      if (commande.quantity == 1) {
        this.cartRemoveItem(id);
      } else {
        commande.quantity = commande.quantity - 1;
      }
    },
    cartRemoveItem(id) {
       let confrm = confirm("Are You Sure to Delete this item");
        if (confrm == true) {
      this.$delete(this.cart, id);
      let selectedItem = JSON.parse(localStorage.getItem("cart")) || [];
      selectedItem.forEach((eldata, index) => {
      selectedItem.splice(index, 1);     
      localStorage.setItem('cart', JSON.stringify(selectedItem));
      setTimeout(() => {
        window.location.reload(true);
      },2000)
    })
    }
    }
  },
  computed: {
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cart) {
        total = total + this.cart[item].quantity * this.cart[item].price;
      }
      return total.toFixed(2);
    },
    itemTotalAmount() {
      let itemTotal = 0;
      for (let item in this.cart) {
        itemTotal = itemTotal + this.cart[item].quantity;
      }
      return itemTotal;
    },
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
  },
};
</script>
<style lang="scss" scoped>
.outer-cart-wrapper {
  background: #fff;
  box-shadow: 0 0 40px rgb(0 0 0 / 80%);
  overflow-x: hidden;
  overflow-y: auto;
  width: 0rem;
  max-width: 52rem;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 1100;
  scrollbar-width: none;
  transition: all 100ms cubic-bezier(0.25, 0.25, 0.84, 0.325);
}
.active {
  width: 100%;
}
.cart-wrapper {
  color: #282828;
  font-family: Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 16px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  width: 90%;
  display: block;
  opacity: 1;
}
.cart-wrapper .headline {
  font-weight: 700;
  font-size: 2rem;
  line-height: 1;
  margin: 0;
  padding: 1rem 2rem;
}
.cart-wrapper .btn.carty--close {
  display: block;
  width: auto;
  opacity: 1;
  position: absolute;
  z-index: 2000;
  transition: opacity, 0.2s, linear;
  top: 1em;
  right: 1em;
}
.cart-wrapper .carty--empty {
  margin: 6rem 0px;
  text-align: center;
}
.cartyClose {
  position: relative;
  top: 150px;
  left: 38%;
  padding-bottom: 10px;
  font-weight: bolder;
  font-size: 1.5rem;
}
.carty--loading {
  margin: 35vh auto 0;
  height: 50px;
  width: 50px;
}
.th-removed {
  display: none !important;
}
.imageAvatar {
  height: 130px;
  width: 130px;
  border-radius: 0px !important;
}
.commandTitle {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.commandPrice {
  width: 130px;
}
.commandquantity {
  width: 20px;
}
.commandColors {
  width: 100px;
}
.commandSize {
  width: 50px;
}
.commandTotal {
  width: 120px;
}
.mobileFlex {
  flex-direction: row;
  margin-bottom: 10px;
}
.totalPrice {
  display: flex !important;
  width: 100%;
  height: auto !important;
  margin-top: 30px;
}
.firstprice {
  width: 50%;
}
.buttonPrice {
  width: 50%;
  text-align-last: end;
}
.w3-button {
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
}
.w3-black,
.w3-hover-black:hover {
  color: #fff !important;
  background-color: #000 !important;
}
.w3-xlarge {
  font-size: 24px !important;
}
.w3-circle {
  border-radius: 30%;
}
.b-avatar .b-avatar-img img {
  height:auto !important;
}
.card-cart-container {
  display: flex;

  .card-container {
    display: flex;
    flex-wrap: wrap;

    .card {
      margin: 0.4rem 1rem 0.4rem 0;
      background: rgb(255, 255, 255);
      border-radius: 4px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 0px 6px rgba(51, 51, 51, 0.15);
      transition: 0.2s ease;
      width: 202px;

      @media screen and (max-width: 600px) {
        margin-right: 0.2rem;
      }

      &:hover {
        transform: scale(1.04);

        img {
          transform: scale(1.08);
        }

        .card-text {
          opacity: 1;
          bottom: 2.3rem;
        }
      }

      .img-container {
        overflow: hidden;

        img {
          height: 210px;
          transition: 0.4s ease;
        }
      }
      .card-text {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.3rem 0.8rem;
        position: absolute;
        bottom: 1rem;
        opacity: 0;
        transition: 0.6s;
        width: 100%;
        height: 75px;
        background: linear-gradient(0deg, white 40%, transparent 100%);

        h3 {
          font-size: 1.2rem;
          padding-right: 4px;
        }
        span {
          background: #2eb7eb;
          font-weight: bold;
          padding: 4px 6px;
          color: white;
          border-radius: 4px;
        }
      }
      .card-icons {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 40px;

        i {
          padding: 3px 5px;
          transition: 0.2s;
          cursor: pointer;

          &:hover {
            animation: scaler 0.8s infinite linear;
          }
        }
        .fa-heart:hover {
          color: rgba(251, 38, 38, 0.5);
        }
        .fa-shopping-cart {
          font-size: 16px;
          color: #2eb7eb;

          &:hover {
            filter: brightness(125%);
          }
        }
        .like-container {
          input {
            display: none;

            &:checked + label i {
              color: rgb(251, 38, 38);
              animation: heart 1.3s forwards ease;

              @keyframes heart {
                0% {
                  filter: hue-rotate(0deg);
                  transform: scale(1);
                }
                50% {
                  filter: hue-rotate(-270deg);
                  transform: scale(1.3);
                }
                100% {
                  filter: hue-rotate(0deg);
                  transform: scale(1);
                }
              }
            }
          }
        }
      }
    }
    .no-result {
      margin: 0 4rem 0 0.4rem;
    }
  }
}
.shopping-cart {
  transition: 0.4s ease;
  padding: 1.4rem;
  border-radius: 4px;
  min-width: 290px;
  box-shadow: 0 1px 6px rgba(51, 51, 51, 0.25);
  height: 100%;
  margin: 1rem 2.4rem 0 0;

  h2 {
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }
  .item-group {
    max-height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 6px;

    &::-webkit-scrollbar {
      display: none;
    }
    .item {
      margin-bottom: 2.4rem;
      position: relative;
      display: grid;
      grid-template-columns: 50px 1fr;
      grid-template-rows: 60% 40%;
      grid-template-areas:
        "a b"
        "a c";

      &:after {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        background: rgba(85, 85, 85, 0.2);
        left: 50%;
        bottom: -22px;
        transform: translateX(-50%);
      }

      .img-container {
        grid-area: a;
        display: flex;
        align-items: center;

        img {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          transform: scale(0);
          animation: img-scale 1s forwards;

          @keyframes img-scale {
            to {
              transform: scale(1);
            }
          }
        }
      }

      .item-description {
        grid-area: b;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width:100%;
        margin-left: 10px;
        overflow: hidden !important;
        text-overflow: ellipsis;
        h5 {
          margin: 0 0.9rem 0.9rem 0;
          background: rgba(51, 51, 51, 0.1);
          padding: 3px 5px;
          border-radius: 4px;
          box-shadow: 0 1px 1px rgba(51, 51, 51, 0.15);
          transform: scaleX(0);
          transform-origin: left;
          animation: img-scale 1s forwards;

          @keyframes img-scale {
            to {
              transform: scaleX(1);
            }
          }
        }
        p {
          transform: translateY(3px);
        }
      }
      .item-quantity {
        grid-area: c;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 10px;

        h6 {
          color: #333;
        }
        .cart-icons {
          display: flex;
          justify-content: space-between;
          width: 30%;
          margin-left: 10px;

          button {
            transform: scaleY(0);

            @mixin icon-anim($delay) {
              animation: icon 0.5s ease forwards;
              animation-delay: $delay;

              @keyframes icon {
                to {
                  transform: scaleY(1);
                }
              }
            }
            &:nth-child(1) {
              @include icon-anim(0.2s);
            }
            &:nth-child(2) {
              @include icon-anim(0.4s);
            }
            &:nth-child(3) {
              @include icon-anim(0.6s);
            }
          }

          i {
            font-size: 0.55rem;
            padding: 5px;
            margin: 0 2px;
            background: white;
            border-radius: 50%;
            color: #2eb7eb;
            transition: 0.3s ease;

            &:hover {
              background: #222;
              color: #2eb7eb;
            }
          }
        }
      }
    }
  }
  .grand-total {
    h6 {
      color: #333;
    }
    .total {
      display: flex;
      justify-content: space-between;
      margin: 1.4rem 0 0.4rem;

      h2 {
        margin-bottom: 0;
      }
    }
  }
  .order-button {
    margin: 1rem auto 0;
    width: 100%;
    text-align: center;

    button {
      background: white;
      padding: 0.8rem;
      border-radius: 4px;
      box-shadow: 0 1px 6px rgba(51, 51, 51, 0.2);
      transition: all 0.2s ease;
      letter-spacing: 1px;

      &:hover {
        background: green;
        color: #fff;
        font-weight: bold;
        letter-spacing: 6px;
        animation: scaler 1.5s infinite linear;
      }
      &:active {
        transform: scale(0.92);
      }
    }
  }
}
// animations
.cart-anim {
  &-enter-active,
  &-leave-active {
    transition: 1.3s cubic-bezier(0.23, 0.66, 0.08, 0.93);
    transform: translateX(0px);
  }
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateX(400px);
  }
}
.item-anim {
  &-enter-active,
  &-leave-active {
    transform: scale(1);
    transition: 0.8s;
  }
  &-enter {
    transition: 0.8s;
  }
  &-leave-to {
    transform: scale(0);
    transition: 0.4s;
  }
}

@keyframes scaler {
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@media (max-width: 768px) {
  .outer-cart-wrapper {
    position: absolute;
  }
  .cart-wrapper .headline {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
    margin: 0;
    padding: 1rem 2rem;
  }
  .mobileFlex {
    flex-direction: column;
  }
}
</style>
