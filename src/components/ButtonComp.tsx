import type { Component } from "solid-js";

import Stack from "@suid/material/Stack";
import Button from "@suid/material/Button";

export const ButtonComp: Component = () => {
    return 
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
};
