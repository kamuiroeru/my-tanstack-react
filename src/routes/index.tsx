import { createFileRoute } from "@tanstack/react-router";
import { clsx } from "clsx/lite";
import App from "./-components/App";

type Search = {
  id: number;
};

export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: (search): Search => ({ id: Number(search.id) || 0 }),
});

function RouteComponent() {
  const { id } = Route.useSearch();
  const navigate = Route.useNavigate();

  const counterSlot = () => (
    <button
      type="button"
      onClick={() =>
        navigate({
          search: { id: id + 1 },
        })
      }
    >
      count is {id}
    </button>
  );

  const isEven = id % 2 === 0;
  return (
    <>
      <pre>{id}</pre>
      <App>{counterSlot()}</App>
      <p
        className={clsx(
          "p-4",
          isEven ? "text-blue-400" : "font-bold text-green-400"
        )}
      >
        ほげふがぴよ
      </p>
    </>
  );
}
