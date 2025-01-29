import { createFileRoute } from "@tanstack/react-router";
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
  return (
    <>
      <pre>{id}</pre>
      <App>{counterSlot()}</App>
    </>
  );
}
