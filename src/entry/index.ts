import type { SvelteComponent } from 'svelte';
import '../base.css'
import { DB, fetchDataAndUpdateDB } from "../data";
import Base from '../lib/Base.svelte'

export default class HNWidget {
  target: WidgetTarget;
  component: SvelteComponent;
  constructor(target: string | HTMLElement) {
    this.target = target;  
  }

  public async start() {
    this.component = new Base({
      target: typeof this.target === "string" ?  document.getElementById(this.target) : this.target,
    });
  };

  public refresh() {
    fetchDataAndUpdateDB(DB).catch(console.error)
  }
}

type WidgetTarget = string | HTMLElement;
