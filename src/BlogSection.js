//BLOG SECTION
import React, { useEffect } from "react";
import BlogPost from "./Blogpost";

export default function BlogSection() {
  const dummyData = [
    {
      id: 1,
      title: "don't overcomplicate stuff",
      body: "🥢 Too many websites overcomplicate their layouts and end up being as fast as a dump truck when it comes to loading speeds. I haven’t done any deep dive into this just yet, but looking over some of the best websites - according to awwwards, I’m starting to believe that there is *borderline* no field of activity that can’t fully benefit from a Single Page App, rather than a traditional multi-page app. I’m saying borderline because there’re the obvious elefants in the room, like e-commerce, social media and others that may be somehow enforced to have a specific layout. But the majority of industries could benefit from SPA’s by having only one initial page load and all (or most of) the information at hand. And I’m saying most of, because API calls are better off left hanging until needed. SPA’s are also very popular with client-side rendering, which makes them efficient and rather easy to work on, making it comfortable for users with all kinds of internet connections to access the information and keep it open, even in conditions where there’s no internet connection afterwards. 🥃 This was obviously just a small conversation I had with myself, but feel free to join. I’m only learning things now. ",
      userId: 9,
      tags: ["history", "american", "crime"],
      reactions: 2,
    },
    {
      id: 2,
      title: "design, design, design",
      body: "🎨 In my last post, I said that I keep 'getting lost' in the design elements. 🌈Confession time: I dove into crafting my personal portfolio without being fluent in design language or its rules. 🤷‍♂️ 'Getting lost' is, however, a bad way to put it. Let me explain: 🎨 The journey itself became a masterclass. Experimenting with combinations, attempting the 60-30-10 rule, and a whole lot of trial and error—slowly, the magic emerged. 💡 Embracing UI/UX principles, I fine-tuned the shades to create an experience that's not only visually captivating but also user-friendly. It's the sweet spot where aesthetics and usability converge. 🎉 And there it was: A canvas that now speaks both to my web dev prowess and my newfound understanding for design synergy. Because sometimes, it's the journey, not the expertise, that leads to the perfect palette.",
      userId: 13,
      tags: ["french", "fiction", "english"],
      reactions: 2,
    },
    {
      id: 3,
      title: "don't put form over function",
      body: "🚀 Functionality First, Looks Follow! 🛠️In the world of web app development, the core is king. 🔑 I keep 'getting lost' in the allure of sleek designs, colours and fonts, but let's not forget the golden rule: functionality reigns supreme. ⚙️ A web app might look stunning, but if it doesn't perform seamlessly, it's like a fancy car with a broken engine. 🚗💨 Building a robust foundation of functionality ensures a smooth, frustration-free experience of your product, which is the true essence of user satisfaction. 🔩 So, before we dazzle with the aesthetics, let's dive into the nuts and bolts, fine-tune the features, and ensure our web apps work flawlessly. Because, in the end, a web app that works beautifully is a work of art in itself. ",
      userId: 32,
      tags: ["magical", "history", "french"],
      reactions: 5,
    },
    {
      id: 4,
      title: "sometimes you need to go with your gut",
      body: "⁉️The pressure to stick to a plan can be counter-productive. Let me explain: 📈 Building my personal website, I am always researching how I can make the UI/UX more efficient, simple and streamlined. This led me to a number of different designs when it came to the menu section. 🎞️ Willing to keep it as simple as possible, and taking the SPA factor into account, I bounced back and forth between burger-style menus, drop-downs, or static navbar-menu items. But somehow none felt right for a simple Single-Page-App. 💡 But then I started thinking sideways. Literally. Thinking only about classic-style navbars&menus, I was really flabbergasted at how insightful a step back can be. So I decided I will use a fixed-position list of four items, that will scroll to the designated anchor points on the webpage, which will always scroll with the content, being there anytime you need them, but never intrude on the rest of the content. 🗝️ Intuition in the design phase for creative solutions should be a part of the status-quo. 💪",
      userId: 12,
      tags: ["mystery", "english", "american"],
      reactions: 1,
    },
    {
      id: 5,
      title: "Hopes and dreams were dashed that day.",
      body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
      userId: 41,
      tags: ["crime", "mystery", "love"],
      reactions: 2,
    },
    {
      id: 6,
      title: "Dave wasn't exactly sure how he had ended up",
      body: "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
      userId: 47,
      tags: ["english", "classic", "american"],
      reactions: 3,
    },
    {
      id: 7,
      title: "This is important to remember.",
      body: "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
      userId: 12,
      tags: ["magical", "crime"],
      reactions: 0,
    },
    {
      id: 8,
      title: "One can cook on and with an open fire.",
      body: "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.",
      userId: 31,
      tags: ["american", "english"],
      reactions: 9,
    },
    {
      id: 9,
      title: "There are different types of secrets.",
      body: "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
      userId: 42,
      tags: ["american", "history", "magical"],
      reactions: 2,
    },
    {
      id: 10,
      title: "They rushed out the door.",
      body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
      userId: 1,
      tags: ["fiction", "magical", "history"],
      reactions: 4,
    },
  ];

  return (
    <div
      className="bg-white h-screen overflow-x-scroll flex flex-col justify-evenly"
      id="blog"
    >
      <div className="text-center text-persianblue sm:text-3xl text-md font-semibold">
        some stories I've told
      </div>
      <div className="container h-96 pr-24 mx-4 grid grid-rows-1 grid-flow-col gap-4 p-4 overflow-x-auto space-y-96">
        <div className="flex flex-row space-x-4">
          {/* Replace with your individual blog post components */}
          {dummyData.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
