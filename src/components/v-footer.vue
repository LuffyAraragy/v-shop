<!--Доделать футер поменять у соцеальных сетей отступы и подуцмать как расположить конент -->
<template>
    <!-- <button class="button" @click="loadData">
        {{ test2 }}
    </button> -->
    <div class="v-footer">
        <div class="v-footer__block-content container">
            <div class="v-footer__content">
                <div class="v-footer__menu content-options" 
                    v-for="(test, index1) in arrayFooterData"
                    :key="index1"
                >
                    <div
                        v-for="(arrayFooterData, index2) in test"
                        :key="index2"
                    >
                        <div class="v-footer___text-h2"  v-if="index2==0">
                            {{ arrayFooterData }}
                        </div>
                        <div class="v-footer___text-h3"  v-if="index2!=0">
                            {{ arrayFooterData }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="v-footer__all-social-network" v-if="arrayFooterSocialContacts.length == 3">
                <div class="v-footer__social-network">
                    <img alt="" class="social-network"
                        v-for="(socialNetwork, index3) in arrayFooterSocialNetwork"
                        :key="index3"
                        :src="require(`@/img/footer/${arrayFooterSocialNetwork[index3]}`)"
                    >
                </div>
                <div class="mail">
                    <img :src="require(`@/img/footer/${arrayFooterSocialContacts[0][0]}`)" class="contact">
                    <p class="v-footer__text">{{ arrayFooterSocialContacts[0][1] }}</p>
                </div>
                <div class="telephone-number">
                    <img :src="require(`@/img/footer/${arrayFooterSocialContacts[1][0]}`)" alt="" class="contact">
                    <p class="v-footer__text">{{ arrayFooterSocialContacts[1][1] }}</p>
                </div>
                <div class="v-footer__information">
                    {{ arrayFooterSocialContacts[2][0] }}
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {fetchFooterData, fetchFooterDataSocialNetwork, fetchFooterDataContacts} from '@/assets/api/apiFooter'

    export default {
        name: 'v-footer',
        data() {
            return {
                arrayFooterData: [],
                arrayFooterSocialNetwork: [],
                test4: [],
                arrayFooterSocialContacts: []
            }
        },
        methods: {
            loadData() {
                fetchFooterData().then(result =>
                {
                    this.arrayFooterData = result;
                });
                fetchFooterDataSocialNetwork().then(result =>
                {
                    this.arrayFooterSocialNetwork = result;
                    console.log(this.arrayFooterSocialNetwork);
                });
                fetchFooterDataContacts().then(result =>
                {
                    this.arrayFooterSocialContacts = result
                });
            }
        },
        mounted() {
            this.loadData();
        }
    }
</script>


<style>
.v-footer {
    width: 100%;
    height: 100%;
    background: #2F2D2D;
}

.v-footer__all-social-network {
    /* Поменял */
    padding-top: 30px;
    padding-bottom: 70px;
    display: flex;
    gap: 60px;
    /* Поменял */
    justify-content: space-between;
}
.v-footer__social-network {
    display: flex;
    gap: 20px;
}
.social-network {
    width: 30px;
    height: 30px;
}

.v-footer__content {
    padding-top: 70px;
    display: flex;
    /* Поменял */
    justify-content: space-between;
    
    
}

.content-options {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: 30px;
}
    .v-footer___text-h2 {
        color: #FFF;
        font-family: Geometria;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .v-footer___text-h3 {
        color: #FFF;
        font-family: Geometria;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

.v-footer__text {
    color: #FFF;

    font-family: Geometria;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.contact {
    width: 20px;
    height: 20px;
}
.v-footer__information {
    max-width: 421px;
    color: #FFF;
    font-family: Geometria;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px; /* 150% */
}
.telephone-number {
    display: flex;
    gap: 25px;
}
.mail {
    display: flex;
    gap: 15px;
}
    
</style>