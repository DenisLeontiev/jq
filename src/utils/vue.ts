import {
  defineComponent as coreDefineComponent,
  ComponentPropsOptions, SetupContext,
} from "vue";

type CoreDefineComponentOptions<Props, Emits> = Omit<Parameters<typeof coreDefineComponent>[0], "setup"> & {
    props?: ComponentPropsOptions<Props>,
    emits?: Array<Emits>
    setup?(props: Props, context: SetupContext): any
}

export const defineComponent = <
    Props extends Record<string, any>,
    Emits extends string = string,
>(options: CoreDefineComponentOptions<Props, Emits>) => coreDefineComponent(options as any) as any;
