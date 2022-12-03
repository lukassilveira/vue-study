<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPosts" :key="index" />
    <BlogCardVue v-for="(card, index) in sampleBlogCards" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCardVue from '../components/BlogCard.vue';
export default {
  name: "Home",
  components: { BlogPost, BlogCardVue },
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
      ],
      sampleBlogCards: [
        { cardTitle: "Card Title #1", cardPhoto: "stock-1", cardDate: "May 1, 2022" },
        { cardTitle: "Card Title #2", cardPhoto: "stock-2", cardDate: "May 1, 2022" },
        { cardTitle: "Card Title #3", cardPhoto: "stock-3", cardDate: "May 1, 2022" },
        { cardTitle: "Card Title #4", cardPhoto: "stock-4", cardDate: "May 1, 2022" }
      ]
    }
  }
};
</script>
