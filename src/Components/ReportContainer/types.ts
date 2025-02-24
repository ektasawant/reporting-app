import React from "react";

/**
* Props for the ReportContaine component.
*/
export type ReportContainerProps = {
    /**
     * label for the title
     * @type {string}
     */
    title: string;
    /**
     * label for the subtitle
     * @type {string}
     */
    subtitle?: React.ReactNode;
    /**
     * content for ReportContainer
     * @type {string}
     */
    children: React.ReactNode;
};