<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPosts" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        isWelcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPosts: [
        {
          title: "This is a Filler Title!",
          blogPost: "This is a filler blog post content!",
          photo: "beautiful-stories"
        },
        {
          title: "This is a Filler Title2!",
          blogPost: "This is a filler blog post content!",
          photo: "designed-for-everyone"
        }
      ]
    }
  }
};
</script>
