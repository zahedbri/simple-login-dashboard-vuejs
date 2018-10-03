<template>
    <div>
        <div class="profile-page">
            <div class="user-info">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-md-10 offset-md-1">
                            <img v-bind:src="this.user.avatar" alt="" class="circle responsive-img">
                            <h4>{{this.user.name}}</h4>
                            <p>"Lorem Ipsum Dolores Bio"</p>
                            <button class="btn">+Follow</button>
                            <hr/>
                            <div class="row">
                                <div class="col s5 left-align">
                                    <h5 class="row s2">What Is Lorem Ipsum?</h5>
                                    <p class="row s10">{{this.whatIsLoremIpsum}}</p>
                                </div>
                                <div class="col s5 left-align offset-s2">
                                    <h5 class="row s2">Why Do We Use It?</h5>
                                    <p class="row s10">{{this.whyDoWeUseIt}}</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="row">
                                    <h5>Where Does It Come from?</h5>
                                    <p>{{this.whereDoesItComeFrom}}</p>
                                </div>
                                <div class="row">
                                    <h5>Where Can I Get Some?</h5>
                                    <p>{{this.whereCanIGetSome}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="page-footer teal">
            <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">{{this.whatIsLoremIpsum.substring(0,100)}}</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Want more?</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" >Here's some for you</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2018 Copyright Text
            </div>
          </div>
        </footer>
    </div>
</template>


<script>
import LoremIpsum from "@/assets/utils/loremIpsum"

export default {
    name: 'Profile',
    props: ["user"],
    data(){
        return {
            whatIsLoremIpsum: null,
            whyDoWeUseIt: null,
            whereDoesItComeFrom: null,
            whereCanIGetSome: null
        }
    },
    created(){
        this.whatIsLoremIpsum = LoremIpsum.whatIsLoremIpsum()
        this.whyDoWeUseIt = LoremIpsum.whyDoWeUseIt()
        this.whereDoesItComeFrom = LoremIpsum.whereDoesItComeFrom()
        this.whereCanIGetSome = LoremIpsum.whereCanIGetSome()

    }
}
</script>

<style>
.profile-page{
    margin-top: 20px;
}
</style>
