import React from "react";
/**
* Props for the ReportHeader component.
*/

export type ReportHeaderProps = {
    /**
     * label for the title
     */
    title: string;
    /**
     * label for the subtitle
     */
    subtitle?: React.ReactNode;
};