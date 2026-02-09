
// <nav className="tabs tabs-bordered overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
//   <button type="button" className="tab active-tab:tab-active active" id="tabs-scroll-item-1" data-tab="#tabs-sm-1" aria-controls="#tabs-sm-1" role="tab" aria-selected="true">
//     Home
//   </button>

import { sectors } from "@/app/models/sectors";
import { birds } from "@/app/models/birds";
export default function Home() {
  return (
    <div className="">
      <main className="">
        <nav className="tabs tabs-bordered overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
          {sectors.map((sector, index) => (
            <button key={sector.id} type="button" className={`tab active-tab:tab-active ${index === 0 ? 'active' : ''}`} id={`tab-button-${sector.id}`} data-tab={`#tab-content-${sector.id}`} aria-controls={`#tab-content-${sector.id}`} role="tab" aria-selected="true">
              {sector.name}
            </button>
          ))}
        </nav>

        <div className="mt-2 p-2">
          {sectors.map((sector, index) => (
            <div id={`tab-content-${sector.id}`} role="tabpanel" aria-labelledby={`tab-button-${sector.id}`} className={`${index === 0 ? 'block' : 'hidden'}`} key={sector.id}>
              <h2>{sector.name}</h2>
              <div className="flex flex-wrap gap-1">
              {birds.map((bird) => (
                <div className="join flex-[0_0_calc(33.333%-0.333rem)]" key={bird.shortName}>
                  <button className="btn btn-sm btn-square btn-secondary join-item  flex-shrink-0">-</button>
                  <button className="btn btn-sm btn-soft btn-primary join-item flex-1 min-w-0">{bird.shortName}</button>
                </div>
              ))}
              </div>
            </div>
          ))}
        </div>


        <form>

            <div className="max-w-32" data-input-number>
              <label className="label-text" htmlFor="number-input-mini">Quantity:</label>
              <div className="input items-center">
                <button type="button" className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
                  <span className="icon-[tabler--minus] size-3.5 shrink-0"></span>
                </button>
                <input className="text-center" type="text" value="0" aria-label="Mini stacked buttons" data-input-number-input id="number-input-mini" />
                <button type="button" className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
                  <span className="icon-[tabler--plus] size-3.5 shrink-0"></span>
                </button>
              </div>
            </div>

        </form>


      </main>
    </div>
  );
}
