import type { FC } from "hono/jsx";

const SnsButton: FC<{ title: string; meta: string }> = ({ title, meta }) => {
  return (
    <div class="flex items-center justify-center mt-10 gap-3">
      <a
        href={`https://twitter.com/share?text=${encodeURI(
          title,
        )}&url=https://sivchari.github.io/x/posts/${meta}`}
        target={"_blank"}
        rel={"noreferrer"}
        class="bg-[#0f1419] text-white flex items-center text-sm rounded-3xl py-3 px-4"
      >
        {import.meta.env.PROD ? (
          <img
            src="https://sivchari.github.io/x/static/x.svg"
            alt="Xにシェアする"
            class="w-4 h-4 mr-1"
          />
        ) : (
          <img src="/static/x.svg" alt="Xにシェアする" class="w-4 h-4 mr-1" />
        )}
        Post
      </a>
    </div>
  );
};

export default SnsButton;
