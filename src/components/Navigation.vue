<template>
    <header>
        <nav>
            <div class="branding">
                <router-link class="header" :to="{ name: 'Home' }">Blogs</router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile">
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" to="#">Login/Register</router-link>
                </ul>
            </div>
        </nav>
        <menuIcon @click="toggleMobileNav()" class="menu-icon" v-show="mobile" />
        <Transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                <router-link class="link" to="#">Home</router-link>
                <router-link class="link" to="#">Blogs</router-link>
                <router-link class="link" to="#">Create Post</router-link>
                <router-link class="link" to="#">Login/Register</router-link>
            </ul>
        </Transition>
    </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg';

export default {
    name: 'navigation',
    components: {
        menuIcon
    },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    created() {
        window.addEventListener('resize', this.checkIfScreenIsMobile);
        this.checkIfScreenIsMobile();
    },
    methods: {
        checkIfScreenIsMobile() {
            console.log('running checkIfScreenIsMobile');
            this.windowWidth = window.innerWidth;
            if ((this.windowWidth) < 750) {

                this.mobile = true;
                return;
            }

            this.mobile = false;
            this.mobileNav = false;
            return;
        },

        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        }
    }
}
</script>

<style lang="sass" scoped>
    header
        background-color: #fff
        padding: 0 25px
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
        z-index: 99
        padding: 0
        .link
            font-weight: 500
            padding: 0 8px
            transition: 0.3s color ease
            &:hover
                color: #1eb8b8                
        nav
            display: flex
            padding: 25px 10px
            justify-content: space-between
            .branding
                display: flex
                align-items: center
                .header
                    font-weight: 600
                    font-size: 24px
                    color: #000
                    text-decoration: none
            .nav-links
                position: relative
                display: flex
                justify-content: end
                align-items: center
                .link
                    margin-right: 32px
                .link:last-of-type
                    margin-right: 0
        .menu-icon
            cursor: pointer
            position: absolute
            top: 32px
            right: 25px
            height: 25px
            width: auto
        .mobile-nav
            padding: 20px
            width: 70%
            max-width: 250px
            display: flex
            flex-direction: column
            position: fixed
            height: 100%
            background-color: #303030
            top: 0
            left: 0

            .link 
                padding: 10px
                color: #fff
        .mobile-nav-enter-active,
        .mobile-nav-leave-active
            transition: all .5s ease

        .mobile-nav-enter
            transform: translateX(-250px)

        .mobile-nav-enter-to
            transform: translateX(0px)

        .mobile-nav-leave-to
            transform: translateX(-250px)
</style>