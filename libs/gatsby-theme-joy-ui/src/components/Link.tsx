import * as React from 'react';
import { Link as JoyLink, LinkProps as JoyLinkProps, styled } from "@mui/joy"

import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
const Anchor = styled('a')({});
type GatsbyLinkComposedProps<T = Record<string, unknown>> = Omit<GatsbyLinkProps<T>, 'ref'>;
const GatsbyLinkComposed = React.forwardRef<HTMLAnchorElement, GatsbyLinkComposedProps>(
    function GatsbyLinkComposed(props, ref) {
        const { to, replace, ...other } = props;

        return (
            <GatsbyLink
                to={to}
                replace={replace}
                {...other}
            />
        );
    },
);
export type _LinkProps = {
    noLinkStyle?: boolean;
} & GatsbyLinkComposedProps &
    Omit<JoyLinkProps, 'href'>;
const Link = React.forwardRef<HTMLAnchorElement, _LinkProps>(function Link(props, ref) {
    const {
        activeClassName = 'active',
        className,
        to,
        noLinkStyle,
        replace,
        target,
        ...other
    } = props;
    const isExternal = (path: string) =>
        path?.startsWith(`http://`) ||
        path?.startsWith(`https://`) ||
        path?.startsWith(`//`);
    const file = /\.[0-9a-z]+$/i.test(to);

    // check if link is external or a file
    if (isExternal(to) || file) {
        // better readability because we know the link is external
        const href = to
        if (noLinkStyle) {
            return <Anchor className={className} href={href} ref={ref} {...other} />;
        }

        return <JoyLink className={className} href={href} ref={ref} {...other} />;
    }
    const GLinkPropsSpread = { to, replace, scroll };

    if (noLinkStyle) {
        return <GatsbyLinkComposed className={className} ref={ref} {...GLinkPropsSpread} {...other} />;
    }

    return (
        <JoyLink
            component={GatsbyLinkComposed}
            className={className}
            ref={ref}
            {...GLinkPropsSpread}
            {...other}
        />
    );
});

export default Link;