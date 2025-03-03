import * as React from "react";
import AnimationIcon from './AnimationIcon';

interface HeadlineProps {
  isLoading: boolean;
}

export default function Headline({ isLoading }: HeadlineProps) {
  return (
    <div className="text-center">
        <AnimationIcon isLoading={isLoading} />
        <h1 className={"text-4xl font-bold text-secondary-foreground"}>
          URL Shortener
        </h1>
        <p className={"mt-2 text-muted-foreground"}>
          Shorten your long URLs with style
        </p>
      </div>
  );
}