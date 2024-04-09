import { posts } from "@/data/posts";

function about() {
  return (
    <div className="p-5">
      <div className="p-5">
        <h1 className="p-5 text-xl font-bold">Members:</h1>
        <div className="flex flex-wrap m-auto lg:w-1/2 justify-evenly items-center">
          {posts.map((post) => (
            <div className="p-5 font-semibold flex justify-center items-center gap-5">
              <img
                className="h-10 border-2 border-violet-600  w-10 rounded-full"
                src={post.image}
                alt=""
              />
              <h1>{post.author}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-t-violet-600 p-5">
        <h1 className="text-xl font-bold md:p-5 mb-5 md:mb-0">Key Milestone: </h1>
        <div className="md:w-1/2 m-auto font-semibold">
          <p>
            Creating a business plan is one of the most important steps in
            starting a new business. A business plan outline your business
            goals, strategies and how you will achieve them. There are a few key
            milestones you should aim to hit while creating your business plan:
          </p>{" "}
          <p>
            1. define your target market: Who are you trying to reach with your
            product or service? Who are your competition?
          </p>{" "}
          <p>
            {" "}
            2. Establish your value proposition: Why should customers choose you
            over your competitors? What makes you different?{" "}
          </p>{" "}
          <p>
            3.Develop your financial forecast: How much money do you need to
            start off and grow the business? What are the associated costs?{" "}
          </p>{" "}
          <p>
            4. Create a timeline for achieving your goals: How long will it take
            to get from point A to point B? What challenges will you face along
            the way?
          </p>
        </div>
      </div>
      <div className="border-t-2 border-t-violet-600 p-5">
        <h1 className="text-xl font-bold md:p-5">History: </h1>
        <div className="md:w-1/2 m-auto font-semibold">
          <h1 className="text-lg font-bold m-5 ml-0">Founding values and original vision for the future</h1>
          <p>
            {" "}
            Companies are seldom founded on a whim. Whether they’re founded to
            start a movement, solve a vexing problem, or assist a specific
            community, companies are created with a vision of being a force for
            positive change and shaping a better future.
          </p>{" "}
          <p>
            {" "}
            This founding vision, in most cases, forms the very heart of the
            company. This vision encompasses the problems that the founders
            aimed to solve and the virtues that guided their earliest actions
            toward creating that positive change. ‍
          </p>{" "}
          <h1 className="text-lg font-bold m-5 ml-0"> Company growth, milestones, and significant triumphs</h1>{" "}
          <p>
            {" "}
            Reflecting on the moments of growth and success is one of the most
            enjoyable aspects of compiling and sharing your company’s history.
            When communicating these successes, however, it’s important to
            reflect on the fact that these successes didn’t occur in a vacuum.
          </p>{" "}
          <p>
            These successes were built upon the combined efforts of
            virtue-driven leadership, hard-working staff, the communities that
            support your company, and the customers who place their trust in
            your brand.
          </p>{" "}
          <p>
            {" "}
            By reflecting on the values that guided — and continue to guide —
            your company and the people, communities, and customers that make it
            strong, you can celebrate its many successes while honoring the
            efforts and relationships that made them possible.
          </p>
          <p>
            In doing so, your internal teams recognize that their efforts are
            always valued and recognized, and customers can see first-hand that
            your brand cares about the relationship it has with the community
            and those that place their trust in your name.
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;
