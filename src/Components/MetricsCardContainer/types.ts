export type  Metric = {
    value: string;
    description: string;
  }
  
export type  MetricsContainerProps = {  
  metrics: Metric[];
}