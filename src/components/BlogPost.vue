<template>
    <div class="blog-wrapper">
        <div class="blog-content">
            <!-- <h2 v-if="post.isWelcomeScreen">{{ post.title }}</h2> -->
            <!-- <h2 v-else>{{ post.title }}</h2> -->
            <h2>{{ post.title }}</h2>
            <p class="content-preview">{{ post.blogPost }}</p>
            <router-link class="link" v-if="post.isWelcomeScreen" to="#">
                Login/Register
                <Arrow class="arrow arrow-light" />
            </router-link>
            <router-link class="link" v-else to="#">
                View Post
                <Arrow class="arrow" />
            </router-link>
        </div>
        <div class="blog-photo">
            <img :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="">
        </div>
    </div>
</template>

<script>
import Arrow from '../assets/Icons/arrow-right-light.svg';
export default {
    name: "blogPost",
    components: {
        Arrow,
    },
    props: {
        post: undefined,
    }
}
</script>

<style lang="scss" scoped>
.blog-wrapper {
    display: flex;
    flex-direction: row;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    .blog-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 2;
        p {
            font-size: 15px;
            font-weight: 300;
            line-height: 1.7;
            max-width: 375px;
        }
        h2 {
            text-transform: uppercase;
            font-weight: 500;
        }
        .link {
            padding-top: 12px;
            display: flex;
        }
        .arrow {
            margin-left: 12px;
            width: 20px;
            height: 100%;
        }
    }

    .blog-photo {
        flex: 3;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.blog-wrapper:nth-child(even) {
    .blog-content {
        order: 2
    }
}

// .blog-wrapper
//     display: flex
//     flex-direction: column
//     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
//     @media (min-width: 700px)
//         min-height: 650px
//         max-height: 650px
//         flex-direction: row
//     .blog-content
//         display: flex
//         flex-direction: column
//         justify-content: center
//         align-items: center
//         flex: 4
//         order: 2
//         @media (min-width: 700px)
//             order: 1
//         @media (min-width: 800px)
//             flex: 3
//         div
//             max-width: 375px
//             padding: 72px 24px
//             @media (min-width: 700px)
//                 padding: 0 24px
//             h2
//                 font-size: 32px
//                 font-weight: 300
//                 text-transform: uppercase
//                 margin-bottom: 24px
//                 @media (min-width: 700px)
//                     font-size: 40px
//             p
//                 font-size: 15px
//                 font-weight: 300
//                 line-height: 1.7
//             .content-preview
//                 font-size: 13px
//                 max-height: 24px
//                 white-space: nowrap
//                 overflow: hidden
//                 text-overflow: ellipsis

//             link
//                 display: inline-flex
//                 align-items: center
//                 margin-top: 32px
//                 padding-bottom: 4px
//                 border-bottom: 1px solid transparent
//                 transition: .25s ease-in all
//                 &:hover
//                     border-bottom-color: #303030

//             .link-light
//                 &:hover
//                     border-bottom-color: #fff
//     .blog-photo
//         order: 1
//         flex: 3
//         box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
//         @media (min-width: 700px)
//             order: 2
//         @media (min-width: 800px)
//             flex: 4
//         img
//             display: block
//             width: 100%
//             height: 100%
//             object-fit: cover
</style>