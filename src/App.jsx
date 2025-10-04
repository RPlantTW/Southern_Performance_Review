import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, ReferenceLine, ScatterChart, Scatter, ZAxis } from 'recharts';

// ====================================================================
// BATTLE OF THE AREAS DATA
// ====================================================================

// Data provided for S1, S2, S3 and Overall South comparison
const battleOfTheAreasSourceData = [
    { region: 'South 1', revenueVsTarget: 91.30, atv: 17.19, ncVsTGT: 65.20, raf: 8.90, vltz: 73.90, wrc: 59.70, unregisteredTransations: 6.70, appAdoption: 37.90, retention: 32.00 },
…export default App;
