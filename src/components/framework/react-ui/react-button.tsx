import { useActionState, useEffect, useState, type ReactNode } from "react";

interface Props {
  content?: (open: boolean) => ReactNode;
}

const pause = async () => await new Promise((res) => setTimeout(res, 1000));

export default function Button({ content }: Props) {
  const [loading, setLoading] = useState(false);
  const [_open, _setOpen] = useState(false);
  const [open, setBufferedOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    pause().then(() => {
      setLoading(false);
      setBufferedOpen(true);
    });
  }, [open]);

  return (
    <>
      <button
        className={
          "px-2 py-0.5 min-w-16 min-h-12 bg-stone-300 text-shadow-stone-800 data-[open='true']:bg-teal-400 data-[open='true']:rounded-xl transition-all duration-1000 ease z-10 relative"
        }
        data-open={open}
        aria-busy={loading}
        disabled={loading}
        onClick={() => _setOpen((prev) => !prev)}
      >
        {loading ? "..." : open ? "Hide" : "Reveal"}
      </button>
      {content && (
        <div
          aria-hidden={!open}
          aria-expanded={open}
          className="aria-[expanded='true']:opacity-100 aria-[expanded='true']:translate-y-4 opacity-0 -translate-y-full transition-all ease duration-700 z-0"
        >
          {content(open)}
        </div>
      )}
    </>
  );
}

export function ButtonWithDrawer() {
  return <Button content={(open) => <p>Coucou</p>} />;
}
