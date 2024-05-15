import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
      <div>
          <p className="text-3xl text-gray-800">
              Hello World
          </p>
          <Button>
              Click me
          </Button>
      </div>

  );
}
