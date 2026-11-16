'use client';

import React, { useState, useMemo } from 'react';
import {
  FCT_MASTER_RECORDS,
  FCT_62_WARDS,
  AreaCouncil,
  CivicCategory,
} from '@/data/fctMasterRecords';
import {
  Search,
  MapPin,
  Wifi,
  BatteryCharging,
  Radio,
  School,
  ShoppingBag,
  Bus,
  Users,
  ShieldAlert,
  HeartPulse,
  Phone,
} from 'lucide-react';

const COUNCIL_OPTIONS: ('All Area Councils' | AreaCouncil)[] = [
  'All Area Councils',
  'AMAC',
  'Bwari',
  'Gwagwalada',
  'Kuje',
  'Kwali',
  'Abaji',
];

const CATEGORY_OPTIONS: ('All categories' | CivicCategory)[] = [
  'All categories',
  'Primary Schools',
  'Junior Secondary Schools',
  'Markets',
  'Bus stops & terminals',
  'Communities & wards',
  'Police Stations & Posts',
  'Primary Health Centres (PHCs)',
  'Government Hospitals',
];

export default function AbujaCivicExplorer() {
  const [selectedCouncil, setSelectedCouncil] = useState<'All Area Councils' | AreaCouncil>(
    'All Area Councils'
  );
  const [selectedCategory, setSelectedCategory] = useState<'All categories' | CivicCategory>(
    'All categories'
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecords = useMemo(() => {
    return FCT_MASTER_RECORDS.filter((item) => {
      if (selectedCouncil !== 'All Area Councils' && item.area_council !== selectedCouncil) {
        return false;
      }
      if (selectedCategory !== 'All categories' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.ward.toLowerCase().includes(q) ||
          item.address.toLowerCase().includes(q) ||
          item.notes.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedCouncil, selectedCategory, searchQuery]);

  const getCategoryIcon = (category: CivicCategory) => {
    switch (category) {
      case 'Primary Schools':
      case 'Junior Secondary Schools':
        return <School size={15} />;
      case 'Markets':
        return <ShoppingBag size={15} />;
      case 'Bus stops & terminals':
        return <Bus size={15} />;
      case 'Communities & wards':
        return <Users size={15} />;
      case 'Police Stations & Posts':
        return <ShieldAlert size={15} />;
      default:
        return <HeartPulse size={15} />;
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 text-[#10271B]">
      <div className="rounded-3xl bg-white border border-[#C9DCCB] p-4 sm:p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B7A43]">
              UBEC • FCDA • NPF • FCT 62 Wards • IoT Edge Telemetry
            </span>
            <h2 className="text-2xl font-extrabold mt-0.5">
              Abuja Connect 2.0 — Comprehensive FCT Directory
            </h2>
          </div>
          <span className="rounded-full bg-[#D8EEDF] text-[#065E33] px-3 py-1 text-xs font-extrabold">
            {filteredRecords.length} Records Shown • 62 Wards Indexed
          </span>
        </div>

        {/* Filter Controls matching mobile dropdown screenshots */}
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-extrabold uppercase text-[#5A6E61]">
              Search School, Ward, Market or Bus Stop
            </label>
            <div className="relative mt-1">
              <Search size={16} className="absolute left-3 top-3 text-[#5A6E61]" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. school, Ushafa, Godozhi, Ibwa, Law School..."
                className="w-full min-h-[44px] rounded-xl border border-[#C9DCCB] pl-9 pr-3 py-2 text-sm font-bold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase text-[#5A6E61]">
              Area Council
            </label>
            <select
              value={selectedCouncil}
              onChange={(e) =>
                setSelectedCouncil(e.target.value as 'All Area Councils' | AreaCouncil)
              }
              className="mt-1 w-full min-h-[44px] rounded-xl border border-[#C9DCCB] bg-[#1E1E24] text-white px-3 py-2 text-sm font-bold"
            >
              {COUNCIL_OPTIONS.map((council) => (
                <option key={council} value={council}>
                  {council}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase text-[#5A6E61]">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value as 'All categories' | CivicCategory)
              }
              className="mt-1 w-full min-h-[44px] rounded-xl border border-[#C9DCCB] bg-[#1E1E24] text-white px-3 py-2 text-sm font-bold"
            >
              {CATEGORY_OPTIONS.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 62 Wards Quick Pill Bar when a specific Area Council is chosen */}
        {selectedCouncil !== 'All Area Councils' && (
          <div className="mt-3 pt-3 border-t border-[#C9DCCB]">
            <p className="text-xs font-extrabold uppercase text-[#5A6E61]">
              Official Wards in {selectedCouncil} Area Council ({FCT_62_WARDS[selectedCouncil].length} Wards):
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {FCT_62_WARDS[selectedCouncil].map((ward) => (
                <button
                  key={ward}
                  type="button"
                  onClick={() => setSearchQuery(ward)}
                  className="rounded-full bg-[#F6FBF3] border border-[#C9DCCB] px-2.5 py-1 text-xs font-bold hover:border-[#0B7A43]"
                >
                  {ward}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results Grid */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRecords.map((rec) => (
          <article
            key={rec.id}
            className="rounded-3xl bg-white border border-[#C9DCCB] p-4 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D8EEDF] text-[#065E33] px-2.5 py-1 text-[11px] font-extrabold">
                  {getCategoryIcon(rec.category)} {rec.category}
                </span>
                <span className="text-[11px] font-extrabold text-[#0E5AA8]">
                  {rec.source_authority}
                </span>
              </div>

              <h3 className="mt-2.5 text-base font-extrabold leading-snug">{rec.name}</h3>
              <p className="mt-0.5 text-xs font-extrabold text-[#0B7A43]">
                {rec.area_council} Area Council • {rec.ward} Ward
              </p>

              <p className="mt-2 text-xs text-[#5A6E61] font-medium flex items-start gap-1.5">
                <MapPin size={14} className="shrink-0 mt-0.5 text-[#10271B]" />
                <span>{rec.address}</span>
              </p>

              <p className="mt-2 text-xs font-medium bg-[#F6FBF3] rounded-xl p-2 border border-[#C9DCCB]">
                {rec.notes}
              </p>

              {/* IoT Edge Node Telemetry Card */}
              {rec.iot && (
                <div className="mt-2.5 rounded-xl bg-[#0F2A1D] text-white p-2.5 text-[11px]">
                  <div className="flex items-center justify-between font-extrabold">
                    <span className="inline-flex items-center gap-1 text-emerald-300">
                      <Radio size={13} /> IoT Node: {rec.iot.node_id}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-flex items-center gap-0.5">
                        <Wifi size={12} /> {rec.iot.signal_dbm} dBm
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-amber-300">
                        <BatteryCharging size={12} /> {rec.iot.solar_battery_pct}%
                      </span>
                    </span>
                  </div>
                  <p className="mt-1 font-medium opacity-95">{rec.iot.sensor_metric}</p>
                </div>
              )}
            </div>

            {rec.phone && (
              <div className="mt-3 pt-2.5 border-t border-[#C9DCCB]">
                <a
                  href={`tel:${rec.phone}`}
                  className="w-full min-h-[40px] rounded-xl bg-red-600 text-white px-3 py-1.5 text-xs font-extrabold flex items-center justify-center gap-1.5"
                >
                  <Phone size={14} /> Call {rec.phone}
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}