"use client";
import { Button } from "@/components/ui/button";
import InfiniteSlider from "../../../../../components/infinite-slider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CodeBlock from "@/components/code-block";
import { TailwindcssButtons } from "@/components/button-preview";
import React from "react";
// import

const ButtonPage = () => {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-black dark:text-white">
        Button
      </h1>
      <p className="text-gray-300 font-semibold">
        {/* Buttons allow users to perform actions and choose with a single tap. */}
        A handpicked collection of reliable, well-tested button components built
        with Tailwind CSS.
      </p>

      {/* Button Preview Section */}
      <TailwindcssButtons />

      {/* Installation Section with Tabs */}
      <section className="mb-12">
        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight text-black dark:text-white mt-10">
          Installation
        </h1>
        <Tabs defaultValue="CLI" className="border-b border-gray-700 mb-4 mt-4">
          <TabsList>
            <TabsTrigger value="CLI">CLI</TabsTrigger>
            <TabsTrigger value="Manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent value="CLI">
            <CodeBlock
              code="npm i motion clsx tailwind-merge react-element-to-jsx-string"
              language="bash"
            />
          </TabsContent>
          <TabsContent value="Manual">
            {/* <div>
              <section className="mb-8">
                <h3 className="text-lg font-semibold mb-2">
                  Step 1: Add the Component Code
                </h3>
                <p className="text-gray-400 mb-2">
                  First, create a new file named{" "}
                  <code className="text-gray-200 bg-gray-800 px-1 rounded">
                    chat-bubble.tsx
                  </code>{" "}
                  inside your{" "}
                  <code className="text-gray-200 bg-gray-800 px-1 rounded">
                    components/ui/
                  </code>{" "}
                  directory. Then, copy and paste the following code into that
                  file:
                </p>
                <CodeBlock
                  code={`import * as React from 'react';
                        import { cva, type VariantProps } from 'class-variance-authority';
                        import { cn } from '@/lib/utils';

                        const chatBubbleVariants = cva(
                        'relative max-w-[80%] rounded-2xl px-4 py-2 text-sm',
                        {
                            variants: {
                            variant: {
                                default: 'bg-primary text-primary-foreground hover:bg-primary/90',
                                destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                                outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                                ghost: 'hover:bg-accent hover:text-accent-foreground',
                                link: 'text-primary underline-offset-4 hover:underline',
                            },
                            position: {
                                left: 'rounded-bl-none self-start',
                                right: 'rounded-br-none self-end',
                            },
                            },
                            defaultVariants: {
                            variant: 'default',
                            position: 'left',
                            },
                        }
                        );

                        export interface ChatBubbleProps
                        extends React.HTMLAttributes<HTMLDivElement>,
                            VariantProps<typeof chatBubbleVariants> {
                        message: string;
                        }

                        const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
                        ({ className, variant, position, message, ...props }, ref) => {
                            return (
                            <div
                                className={cn(chatBubbleVariants({ variant, position, className }))}
                                ref={ref}
                                {...props}
                            >
                                {message}
                            </div>
                            );
                        }
                        );
                        ChatBubble.displayName = 'ChatBubble';

                        export { ChatBubble, chatBubbleVariants };
                        `}
                  language="typescript"
                />
              </section>
            </div> */}
          </TabsContent>
        </Tabs>
      </section>

      {/* <Button variant="destructive" animate="scale">
        Click me
      </Button> */}
      {/* <InfiniteSlider
        items={[
          <div className="p-4 bg-blue-500 text-white rounded-lg">Item 1</div>,
          <div className="p-4 bg-green-500 text-white rounded-lg">Item 2</div>,
          <div className="p-4 bg-purple-500 text-white rounded-lg">Item 3</div>,
          <div className="p-4 bg-red-500 text-white rounded-lg">Item 4</div>,
          <div className="p-4 bg-yellow-500 text-white rounded-lg">Item 5</div>,
        ]}
        speed={5} // Speed is customizable
      /> */}
    </div>
  );
};

export default ButtonPage;
