// Element data
const elements = [
    

    { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, atomicMass: 1.008, category: 'Nonmetal', group: 1, period: 1, meltingPoint: -259.14, boilingPoint: -252.87, discoveryDate: '1766', discoverer: 'Henry Cavendish', wikipediaExcerpt: 'Hydrogen is the chemical element with the symbol H and atomic number 1.', electronConfiguration: '1s1' },
    { symbol: 'He', name: 'Helium', atomicNumber: 2, atomicMass: 4.003, category: 'Noble Gas', group: 18, period: 1, meltingPoint: -272.2, boilingPoint: -268.93, discoveryDate: '1895', discoverer: 'Pierre Janssen', wikipediaExcerpt: 'Helium is a chemical element with the symbol He and atomic number 2.', electronConfiguration: '1s2' },
    { symbol: 'Li', name: 'Lithium', atomicNumber: 3, atomicMass: 6.94, category: 'Alkali Metal', group: 1, period: 2, meltingPoint: 180.54, boilingPoint: 1342, discoveryDate: '1817', discoverer: 'Johan August Arfwedson', wikipediaExcerpt: 'Lithium is a chemical element with the symbol Li and atomic number 3.', electronConfiguration: '[He] 2s1' },
    { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, atomicMass: 9.0122, category: 'Alkaline Earth Metal', group: 2, period: 2, meltingPoint: 1287, boilingPoint: 2469, discoveryDate: '1798', discoverer: 'Louis-Nicolas Vauquelin', wikipediaExcerpt: 'Beryllium is a chemical element with the symbol Be and atomic number 4.', electronConfiguration: '[He] 2s2' },
    { symbol: 'B', name: 'Boron', atomicNumber: 5, atomicMass: 10.81, category: 'Metalloid', group: 13, period: 2, meltingPoint: 2075, boilingPoint: 4000, discoveryDate: '1808', discoverer: 'Joseph Louis Gay-Lussac', wikipediaExcerpt: 'Boron is a chemical element with the symbol B and atomic number 5.', electronConfiguration: '[He] 2s2 2p1' },
    { symbol: 'C', name: 'Carbon', atomicNumber: 6, atomicMass: 12.011, category: 'Nonmetal', group: 14, period: 2, meltingPoint: 3550, boilingPoint: 4027, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Carbon is a chemical element with the symbol C and atomic number 6.', electronConfiguration: '[He] 2s2 2p2' },
    { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, atomicMass: 14.007, category: 'Nonmetal', group: 15, period: 2, meltingPoint: -210.1, boilingPoint: -195.79, discoveryDate: '1772', discoverer: 'Daniel Rutherford', wikipediaExcerpt: 'Nitrogen is a chemical element with the symbol N and atomic number 7.', electronConfiguration: '[He] 2s2 2p3' },
    { symbol: 'O', name: 'Oxygen', atomicNumber: 8, atomicMass: 15.999, category: 'Nonmetal', group: 16, period: 2, meltingPoint: -218.79, boilingPoint: -182.96, discoveryDate: '1774', discoverer: 'Joseph Priestley', wikipediaExcerpt: 'Oxygen is a chemical element with the symbol O and atomic number 8.', electronConfiguration: '[He] 2s2 2p4' },
    { symbol: 'F', name: 'Fluorine', atomicNumber: 9, atomicMass: 18.998, category: 'Nonmetal', group: 17, period: 2, meltingPoint: -219.67, boilingPoint: -188.11, discoveryDate: '1886', discoverer: 'Henri Moissan', wikipediaExcerpt: 'Fluorine is a chemical element with the symbol F and atomic number 9.', electronConfiguration: '[He] 2s2 2p5' },
    { symbol: 'Ne', name: 'Neon', atomicNumber: 10, atomicMass: 20.180, category: 'Noble Gas', group: 18, period: 2, meltingPoint: -248.59, boilingPoint: -246.08, discoveryDate: '1898', discoverer: 'William Ramsay', wikipediaExcerpt: 'Neon is a chemical element with the symbol Ne and atomic number 10.', electronConfiguration: '[He] 2s2 2p6' },
    { symbol: 'Na', name: 'Sodium', atomicNumber: 11, atomicMass: 22.990, category: 'Alkali Metal', group: 1, period: 3, meltingPoint: 97.79, boilingPoint: 883, discoveryDate: '1807', discoverer: 'Humphry Davy', wikipediaExcerpt: 'Sodium is a chemical element with the symbol Na and atomic number 11.', electronConfiguration: '[Ne] 3s1' },
    { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, atomicMass: 24.305, category: 'Alkaline Earth Metal', group: 2, period: 3, meltingPoint: 650, boilingPoint: 1090, discoveryDate: '1808', discoverer: 'Joseph Black', wikipediaExcerpt: 'Magnesium is a chemical element with the symbol Mg and atomic number 12.', electronConfiguration: '[Ne] 3s2' },
    { symbol: 'Al', name: 'Aluminum', atomicNumber: 13, atomicMass: 26.982, category: 'Post-transition Metal', group: 13, period: 3, meltingPoint: 660.32, boilingPoint: 2519, discoveryDate: '1825', discoverer: 'Hans Christian Ørsted', wikipediaExcerpt: 'Aluminum is a chemical element with the symbol Al and atomic number 13.', electronConfiguration: '[Ne] 3s2 3p1' },
    { symbol: 'Si', name: 'Silicon', atomicNumber: 14, atomicMass: 28.085, category: 'Metalloid', group: 14, period: 3, meltingPoint: 1414, boilingPoint: 2900, discoveryDate: '1824', discoverer: 'Jöns Jacob Berzelius', wikipediaExcerpt: 'Silicon is a chemical element with the symbol Si and atomic number 14.', electronConfiguration: '[Ne] 3s2 3p2' },
    { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, atomicMass: 30.974, category: 'Nonmetal', group: 15, period: 3, meltingPoint: 44.15, boilingPoint: 280.5, discoveryDate: '1669', discoverer: 'Hennig Brand', wikipediaExcerpt: 'Phosphorus is a chemical element with the symbol P and atomic number 15.', electronConfiguration: '[Ne] 3s2 3p3' },
    { symbol: 'S', name: 'Sulfur', atomicNumber: 16, atomicMass: 32.06, category: 'Nonmetal', group: 16, period: 3, meltingPoint: 115.21, boilingPoint: 444.6, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Sulfur is a chemical element with the symbol S and atomic number 16.', electronConfiguration: '[Ne] 3s2 3p4' },
    { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, atomicMass: 35.45, category: 'Nonmetal', group: 17, period: 3, meltingPoint: -101.5, boilingPoint: -34.04, discoveryDate: '1774', discoverer: 'Carl Wilhelm Scheele', wikipediaExcerpt: 'Chlorine is a chemical element with the symbol Cl and atomic number 17.', electronConfiguration: '[Ne] 3s2 3p5' },
    { symbol: 'Ar', name: 'Argon', atomicNumber: 18, atomicMass: 39.948, category: 'Noble Gas', group: 18, period: 3, meltingPoint: -189.34, boilingPoint: -185.85, discoveryDate: '1894', discoverer: 'Lord Rayleigh and William Ramsay', wikipediaExcerpt: 'Argon is a chemical element with the symbol Ar and atomic number 18.', electronConfiguration: '[Ne] 3s2 3p6' },
    { symbol: 'K', name: 'Pot assium', atomicNumber: 19, atomicMass: 39.098, category: 'Alkali Metal', group: 1, period: 4, meltingPoint: 63.5, boilingPoint: 759, discoveryDate: '1807', discoverer: 'Humphry Davy', wikipediaExcerpt: 'Potassium is a chemical element with the symbol K and atomic number 19.', electronConfiguration: '[Ar] 4s1' },
    { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, atomicMass: 40.078, category: 'Alkaline Earth Metal', group: 2, period: 4, meltingPoint: 842, boilingPoint: 1484, discoveryDate: '1808', discoverer: 'Humphry Davy', wikipediaExcerpt: 'Calcium is a chemical element with the symbol Ca and atomic number 20.', electronConfiguration: '[Ar] 4s2' },
    { symbol: 'Sc', name: 'Scandium', atomicNumber: 21, atomicMass: 44.956, category: 'Transition Metal', group: 3, period: 4, meltingPoint: 1541, boilingPoint: 2831, discoveryDate: '1879', discoverer: 'Lars Fredrik Nilson', wikipediaExcerpt: 'Scandium is a chemical element with the symbol Sc and atomic number 21.', electronConfiguration: '[Ar] 3d1 4s2' },
    { symbol: 'Ti', name: 'Titanium', atomicNumber: 22, atomicMass: 47.867, category: 'Transition Metal', group: 4, period: 4, meltingPoint: 1668, boilingPoint: 3287, discoveryDate: '1791', discoverer: 'William Gregor', wikipediaExcerpt: 'Titanium is a chemical element with the symbol Ti and atomic number 22.', electronConfiguration: '[Ar] 3d2 4s2' },
    { symbol: 'V', name: 'Vanadium', atomicNumber: 23, atomicMass: 50.941, category: 'Transition Metal', group: 5, period: 4, meltingPoint: 1910, boilingPoint: 3407, discoveryDate: '1801', discoverer: 'Anders Gustav Ekeberg', wikipediaExcerpt: 'Vanadium is a chemical element with the symbol V and atomic number 23.', electronConfiguration: '[Ar] 3d3 4s2' },
    { symbol: 'Cr', name: 'Chromium' ,atomicNumber: 24, atomicMass: 51.996, category: 'Transition Metal', group: 6, period: 4, meltingPoint: 1907, boilingPoint: 2671, discoveryDate: '1797', discoverer: 'Louis Nicolas Vauquelin', wikipediaExcerpt: 'Chromium is a chemical element with the symbol Cr and atomic number 24.', electronConfiguration: '[Ar] 3d5 4s1' },
    { symbol: 'Mn', name: 'Manganese', atomicNumber: 25, atomicMass: 54.938, category: 'Transition Metal', group: 7, period: 4, meltingPoint: 1246, boilingPoint: 2061, discoveryDate: '1774', discoverer: 'Johann Gottlieb Gahn', wikipediaExcerpt: 'Manganese is a chemical element with the symbol Mn and atomic number 25.', electronConfiguration: '[Ar] 3d5 4s2' },
    { symbol: 'Fe', name: 'Iron', atomicNumber: 26, atomicMass: 55.845, category: 'Transition Metal', group: 8, period: 4, meltingPoint: 1538, boilingPoint: 2862, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Iron is a chemical element with the symbol Fe and atomic number 26.', electronConfiguration: '[Ar] 3d6 4s2' },
    { symbol: 'Co', name: 'Cobalt', atomicNumber: 27, atomicMass: 58.933, category: 'Transition Metal', group: 9, period: 4, meltingPoint: 1495, boilingPoint: 2927, discoveryDate: '1735', discoverer: 'Georg Brandt', wikipediaExcerpt: 'Cobalt is a chemical element with the symbol Co and atomic number 27.', electronConfiguration: '[Ar] 3d7 4s2' },
    { symbol: 'Ni', name: 'Nickel', atomicNumber: 28, atomicMass: 58.693, category: 'Transition Metal', group: 10, period: 4, meltingPoint: 1455, boilingPoint: 2913, discoveryDate: '1751', discoverer: 'Axel Fredrik Cronstedt', wikipediaExcerpt: 'Nickel is a chemical element with the symbol Ni and atomic number 28.', electronConfiguration: '[Ar] 3d8 4s2' },
    { symbol: 'Cu', name: 'Copper', atomicNumber: 29, atomicMass: 63.546, category: 'Transition Metal', group: 11, period: 4, meltingPoint: 1084.62, boilingPoint: 2562, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Copper is a chemical element with the symbol Cu and atomic number 29.', electronConfiguration: '[Ar] 3d10 4s1' },
    { symbol: 'Zn', name: 'Zinc', atomicNumber: 30, atomicMass: 65.38, category: 'Transition Metal', group: 12, period: 4, meltingPoint: 419.58, boilingPoint: 907, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Zinc is a chemical element with the symbol Zn and atomic number 30.', electronConfiguration: '[Ar] 3d10 4s2' },
    { symbol: 'Ga', name: 'Gallium', atomicNumber: 31, atomicMass: 69.723, category: 'Post-transition Metal', group: 13, period: 4, meltingPoint: 29.76, boilingPoint: 2204, discoveryDate: '1875', discoverer: 'Lecoq de Boisbaudran', wikipediaExcerpt: 'Gallium is a chemical element with the symbol Ga and atomic number 31.', electronConfiguration: '[Ar] 3d10 4s2 4p1' },
    { symbol: 'Ge', name: 'Germanium', atomicNumber: 32, atomicMass: 72.630, category: 'Metalloid', group: 14, period: 4, meltingPoint: 938.25, boilingPoint: 2833, discoveryDate: '1886', discoverer: 'Clemens Winkler', wikipediaExcerpt: 'Germanium is a chemical element with the symbol Ge and atomic number 32.', electronConfiguration: '[Ar] 3d10 4s2 4p2' },
    { symbol: 'As', name: 'Arsenic', atomicNumber: 33, atomicMass: 74.922, category: 'Metalloid', group: 15, period: 4, meltingPoint: 817, boilingPoint: 614, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Arsenic is a chemical element with the symbol As and atomic number 33.', electronConfiguration: '[Ar] 3d10 4s2 4p3' },
    { symbol: 'Se', name: 'Selenium', atomicNumber: 34, atomicMass: 78.971, category: 'Nonmetal', group: 16, period: 4, meltingPoint: 221, boilingPoint: 685, discoveryDate: '1817', discoverer: 'Jöns Jacob Berzelius', wikipediaExcerpt: 'Selenium is a chemical element with the symbol Se and atomic number 34.', electronConfiguration: '[Ar] 3d10 4s2 4p4' },
    { symbol: 'Br', name: 'Bromine', atomicNumber: 35, atomicMass: 79.904, category: 'Nonmetal', group: 17, period: 4, meltingPoint: -7.2, boilingPoint: 58.8, discoveryDate: '1826', discoverer: 'Antoine Jérôme Balard', wikipediaExcerpt: 'Bromine is a chemical element with the symbol Br and atomic number 35.', electronConfiguration: '[Ar] 3d10 4s2 4p5' },
    { symbol: 'Kr', name: 'Krypton', atomicNumber: 36, atomicMass: 83.798, category: 'Noble Gas', group: 18, period: 4, meltingPoint: -157.37, boilingPoint: -157.36, discoveryDate: '1898', discoverer: 'William Ramsay', wikipediaExcerpt: 'Krypton is a chemical element with the symbol Kr and atomic number 36.', electronConfiguration: '[Ar] 3d10 4s2 4p6' },
    { symbol: 'Rb' , name: 'Rubidium', atomicNumber: 37, atomicMass: 85.468, category: 'Alkali Metal', group: 1, period: 5, meltingPoint: 39.31, boilingPoint: 688, discoveryDate: '1861', discoverer: 'Robert Bunsen and Gustav Kirchhoff', wikipediaExcerpt: 'Rubidium is a chemical element with the symbol Rb and atomic number 37.', electronConfiguration: '[Kr] 5s1' },
    { symbol: 'Sr', name: 'Strontium', atomicNumber: 38, atomicMass: 87.62, category: 'Alkaline Earth Metal', group: 2, period: 5, meltingPoint: 777, boilingPoint: 1382, discoveryDate: '1790', discoverer: 'William Cruickshank', wikipediaExcerpt: 'Strontium is a chemical element with the symbol Sr and atomic number 38.', electronConfiguration: '[Kr] 5s2' },
    { symbol: 'Y', name: 'Yttrium', atomicNumber: 39, atomicMass: 88.906, category: 'Transition Metal', group: 3, period: 5, meltingPoint: 1526, boilingPoint: 3337, discoveryDate: '1794', discoverer: 'Johan Gadolin', wikipediaExcerpt: 'Yttrium is a chemical element with the symbol Y and atomic number 39.', electronConfiguration: '[Kr] 4d1 5s2' },
    { symbol: 'Zr', name: 'Zirconium', atomicNumber: 40, atomicMass: 91.224, category: 'Transition Metal', group: 4, period: 5, meltingPoint: 1855, boilingPoint: 4377, discoveryDate: '1789', discoverer: 'Martin Heinrich Klaproth', wikipediaExcerpt: 'Zirconium is a chemical element with the symbol Zr and atomic number 40.', electronConfiguration: '[Kr] 4d2 5s2' },
    { symbol: 'Nb', name: 'Niobium', atomicNumber: 41, atomicMass: 92.906, category: 'Transition Metal', group: 5, period: 5, meltingPoint: 2468, boilingPoint: 4744, discoveryDate: '1801', discoverer: 'Charles Hatchett', wikipediaExcerpt: 'Niobium is a chemical element with the symbol Nb and atomic number 41.', electronConfiguration: '[Kr] 4d4 5s1' },
    { symbol: 'Mo', name: 'Molybdenum', atomicNumber: 42, atomicMass: 95.95, category: 'Transition Metal', group: 6, period: 5, meltingPoint: 2623, boilingPoint: 4639, discoveryDate: '1778', discoverer: 'Carl Wilhelm Scheele', wikipediaExcerpt: 'Molybdenum is a chemical element with the symbol Mo and atomic number 42.', electronConfiguration: '[Kr] 4d5 5s1' },
    { symbol: 'Tc', name: 'Technetium', atomicNumber: 43, atomicMass: 98, category: 'Transition Metal', group: 7, period: 5, meltingPoint: 2157, boilingPoint: 4265, discoveryDate: '1937', discoverer: 'Glenn T. Seaborg, Emilio Segrè, and others', wikipediaExcerpt: 'Technetium is a chemical element with the symbol Tc and atomic number 43.', electronConfiguration: '[Kr] 4d5 5s2' },
    { symbol: 'Ru', name: 'Ruthenium', atomicNumber: 44, atomicMass: 101.07, category: 'Transition Metal', group: 8, period: 5, meltingPoint: 2334, boilingPoint: 4150, discoveryDate: '1844', discoverer: 'Karl Ernst Claus', wikipediaExcerpt: 'Ruthenium is a chemical element with the symbol Ru and atomic number 44.', electronConfiguration: '[Kr] 4d7 5s1' },
    { symbol: 'Rh', name: 'Rhodium', atomicNumber: 45, atomicMass: 102.905, category: 'Transition Metal', group: 9, period: 5, meltingPoint: 1964, boilingPoint: 3727, discoveryDate: '1803', discoverer: 'William Hyde Wollaston', wikipediaExcerpt: 'Rhodium is a chemical element with the symbol Rh and atomic Number 45.', electronConfiguration: '[Kr] 4d8 5s1' },
    { symbol: 'Pd', name: 'Palladium', atomicNumber: 46, atomicMass: 106.42, category: 'Transition Metal', group: 10, period: 5, meltingPoint: 1554, boilingPoint: 2963, discoveryDate: '1803', discoverer: 'William Hyde Wollaston', wikipediaExcerpt: 'Palladium is a chemical element with the symbol Pd and atomic number 46.', electronConfiguration: '[Kr] 4d10' },
    { symbol: 'Ag', name: 'Silver', atomicNumber: 47, atomicMass: 107.868, category: 'Transition Metal', group: 11, period: 5, meltingPoint: 961.78, boilingPoint: 2162, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Silver is a chemical element with the symbol Ag and atomic number 47.', electronConfiguration: '[Kr] 4d10 5s1' },
    { symbol: 'Cd', name: 'Cadmium', atomicNumber: 48, atomicMass: 112.414, category: 'Transition Metal', group: 12, period: 5, meltingPoint: 321.07, boilingPoint: 765, discoveryDate: '1817', discoverer: 'Friedrich Strohmeyer', wikipediaExcerpt: 'Cadmium is a chemical element with the symbol Cd and atomic number 48.', electronConfiguration: '[Kr] 4d10 5s2' },
    { symbol: 'In', name: 'Indium', atomicNumber: 49, atomicMass: 114.818, category: 'Post-transition Metal', group: 13, period: 5, meltingPoint: 156.6, boilingPoint: 2072, discoveryDate: '1863', discoverer: 'Ferdinand Reich and Heinrich Richter', wikipediaExcerpt: 'Indium is a chemical element with the symbol In and atomic number 49.', electronConfiguration: '[Kr] 4d10 5s2 5p1' },
    { symbol: 'Sn', name: 'Tin', atomicNumber: 50, atomicMass: 118.710, category: 'Post-transition Metal', group: 14, period: 5, meltingPoint: 231.93, boilingPoint: 2602, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Tin is a chemical element with the symbol Sn and atomic number 50.', electronConfiguration: '[Kr] 4d10 5s2 5p2' },
    { symbol: 'Sb', name: 'Antimony', atomicNumber: 51, atomicMass: 121.760, category: 'Metalloid', group: 15, period: 5, meltingPoint: 630.63, boilingPoint: 1587, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Antimony is a chemical element with the symbol Sb and atomic number 51.', electronConfiguration: '[Kr] 4d10 5s2 5p3' },
    { symbol: 'Te', name: 'Tellurium', atomicNumber: 52, atomicMass: 127.60, category: 'Metalloid', group: 16, period: 5, meltingPoint: 449.51, boilingPoint: 988, discoveryDate: '1782', discoverer: 'Franz-Joseph Müller von Reichenstein', wikipediaExcerpt: 'Tellurium is a chemical element with the symbol Te and atomic number 52.', electronConfiguration: '[Kr] 4d10 5s2 5p4' },
    { symbol: 'I', name: 'Iodine', atomicNumber: 53, atomicMass: 126.904, category: 'Nonmetal', group: 17, period: 5, meltingPoint: 113.7, boilingPoint: 184.3, discoveryDate: '1811', discoverer: 'Bernard Courtois', wikipediaExcerpt: 'Iodine is a chemical element with the symbol I and atomic number 53.', electronConfiguration: '[Kr] 4d10 5s2 5p5' },
    { symbol: 'Xe', name: 'Xenon', atomicNumber: 54, atomicMass: 131.293, category: 'Noble Gas', group: 18, period: 5, meltingPoint: -111.8, boilingPoint: -108.1, discoveryDate: '1898', discoverer: 'William Ramsay', wikipediaExcerpt: 'Xenon is a chemical element with the symbol Xe and atomic number 54.', electronConfiguration: '[Kr] 4d10 5s2 5p6' },
    { symbol: 'Cs', name: 'Cesium', atomicNumber: 55, atomicMass: 132.905, category: 'Alkali Metal', group: 1, period: 6, meltingPoint: 28.5, boilingPoint: 671, discoveryDate: '1860', discoverer: 'Robert Bunsen and Gustav Kirchhoff', wikipediaExcerpt: 'Cesium is a chemical element with the symbol Cs and atomic number 55.', electronConfiguration: '[Xe] 6s1' },
    { symbol: 'Ba', name: 'Barium', atomicNumber: 56, atomicMass: 137.327, category: 'Alkaline Earth Metal', group: 2, period: 6, meltingPoint: 727, boilingPoint: 1640, discoveryDate: '1772', discoverer: 'Carl Wilhelm Scheele', wikipediaExcerpt: 'Barium is a chemical element with the symbol Ba and atomic number 56.', electronConfiguration: '[Xe] 6s2' },
    { symbol: 'La', name: 'Lanthanum', atomicNumber: 57, atomicMass: 138.904, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 920, boilingPoint: 3464, discoveryDate: '1839', discoverer: 'Carl Gustaf Mosander', wikipediaExcerpt: 'Lanthanum is a chemical element with the symbol La and atomic number 57.', electronConfiguration: '[Xe] 5d1 6s2' },
    { symbol: 'Ce', name: 'Cerium', atomicNumber: 58, atomicMass: 140.116, category: 'Lanthanide', group: 4, period: 6, meltingPoint: 795, boilingPoint: 3426, discoveryDate: '1803', discoverer: 'Jöns Jacob Berzelius and Wilhelm Hisinger', wikipediaExcerpt: 'Cerium is a chemical element with the symbol Ce and atomic number 58.', electronConfiguration: '[Xe] 4f1 5d1 6s2' },
    { symbol: 'Pr', name: 'Praseodymium', atomicNumber: 59, atomicMass: 140.907, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 931, boilingPoint: 3520, discoveryDate: '1885', discoverer: 'Eugène-Antoine Demarçay', wikipediaExcerpt: 'Praseodymium is a chemical element with the symbol Pr and atomic number 59.', electronConfiguration: '[Xe] 4f3 6s2' },
    { symbol: 'Nd', name: 'Neodymium', atomicNumber: 60, atomicMass: 144.242, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 1021, boilingPoint: 3127, discoveryDate: '1885', discoverer: 'Eugène-Antoine Demarçay', wikipediaExcerpt: 'Neodymium is a chemical element with the symbol Nd and atomic number 60.', electronConfiguration: '[Xe] 4f4 6s2' },
    { symbol: 'Pm', name: 'Promethium', atomicNumber: 61, atomicMass: 145, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 1100, boilingPoint: 3000, discoveryDate: '1945', discoverer: 'Charles D. Coryell, Jacob Silverman, and others', wikipediaExcerpt: 'Promethium is a chemical element with the symbol Pm and atomic number 61.', electronConfiguration: '[Xe] 4f5 6s2' },
    { symbol: 'Sm', name: 'Samarium', atomicNumber: 62, atomicMass: 150.36, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 1072, boilingPoint: 1794, discoveryDate: '1853', discoverer: 'Léon G. Period', wikipediaExcerpt: 'Samarium is a chemical element with the symbol Sm and atomic number 62.', electronConfiguration: '[Xe] 4f6 6s2' },
    { symbol: 'Eu', name: 'Europium', atomicNumber: 63, atomicMass: 151.964, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 822, boilingPoint: 1529, discoveryDate: '1901', discoverer: 'Eugène-Antoine Demarçay', wikipediaExcerpt: 'Europium is a chemical element with the symbol Eu and atomic number 63.', electronConfiguration: '[Xe] 4f7 6s2' },
    { symbol: 'Gd', name: 'Gadolinium', atomicNumber: 64, atomicMass: 157.25, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 1313, boilingPoint: 3273, discoveryDate: '1880', discoverer: 'Johan Gadolin', wikipediaExcerpt: 'Gadolinium is a chemical element with the symbol Gd and atomic number 64.', electronConfiguration: '[Xe] 4f7 5d1 6s2' },
    { symbol: 'Tb', name: 'Terbium', atomicNumber: 65, atomicMass: 158.925, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 1356, boilingPoint: 3123, discoveryDate: '1843', discoverer: 'Johan Gadolin', wikipediaExcerpt: 'Terbium is a chemical element with the symbol Tb and atomic number 65.', electronConfiguration: '[Xe] 4f9 6s2' },
    { symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, atomicMass: 162.500, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 1412, boilingPoint: 2562, discoveryDate: '1886', discoverer: 'Paul Émile Lecoq de Boisbaudran', wikipediaExcerpt: 'Dysprosium is a chemical element with the symbol Dy and atomic number 66.', electronConfiguration: '[Xe] 4f10 6s2' },
    { symbol: 'Ho', name: 'Holmium', atomicNumber: 67, atomicMass: 164.930, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 1474, boilingPoint: 2720, discoveryDate: '1878', discoverer: 'Jacques-Louis Soret', wikipediaExcerpt: 'Holmium is a chemical element with the symbol Ho and atomic number 67.', electronConfiguration: '[Xe] 4f11 6s2' },
    { symbol: 'Er', name: 'Erbium', atomicNumber: 68, atomicMass: 167.259, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 1529, boilingPoint: 2510, discoveryDate: '1843', discoverer: 'Johan Gadolin', wikipediaExcerpt: 'Erbium is a chemical element with the symbol Er and atomic number 68.', electronConfiguration: '[Xe] 4f12 6s2' },
    { symbol: 'Tm', name: 'Thulium', atomicNumber: 69, atomicMass: 168.934, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 1545, boilingPoint: 1629, discoveryDate: '1879', discoverer: 'Johan Gadolin', wikipediaExcerpt: 'Thulium is a chemical element with the symbol Tm and atomic number 69.', electronConfiguration: '[Xe] 4f13 6s2' },
    { symbol: 'Yb', name: 'Ytterbium', atomicNumber: 70, atomicMass: 173.04, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 819, boilingPoint: 1469, discoveryDate: '1878', discoverer: 'Jean Charles Galissard de Marignac', wikipediaExcerpt: 'Ytterbium is a chemical element with the symbol Yb and atomic number 70.', electronConfiguration: '[Xe] 4f14 6s2' },
    { symbol: 'Lu', name: 'Lutetium', atomicNumber: 71, atomicMass: 174.966, category: 'Lanthanide', group: 3, period: 6, meltingPoint: 1663, boilingPoint: 3402, discoveryDate: '1907', discoverer: 'Georges Urbain, Carl Auer von Welsbach, and others', wikipediaExcerpt: 'Lutetium is a chemical element with the symbol Lu and atomic number 71.', electronConfiguration: '[Xe] 4f14 5d1 6s2' },
    { symbol: 'Hf', name: 'Hafnium', atomicNumber: 72, atomicMass: 178.49, category: 'Transition Metal', group: 4, period: 6, meltingPoint: 2150, boilingPoint: 4602, discoveryDate: '1923', discoverer: 'Zirconium and Hafnium', wikipediaExcerpt: 'Hafnium is a chemical element with the symbol Hf and atomic number 72.', electronConfiguration: '[Xe] 4f14 5d2 6s2' },
    { symbol: 'Ta', name: 'Tantalum', atomicNumber: 73, atomicMass: 180.947, category: 'Transition Metal', group: 5, period: 6, meltingPoint: 3017, boilingPoint: 5458, discoveryDate: '1802', discoverer: 'Anders Ekeberg', wikipediaExcerpt: 'Tantalum is a chemical element with the symbol Ta and atomic number 73.', electronConfiguration: '[Xe] 4f14 5d3 6s2' },
    { symbol: 'W', name: 'Tungsten', atomicNumber: 74, atomicMass: 183.84, category: 'Transition Metal', group: 6, period: 6, meltingPoint: 3422, boilingPoint: 5555, discoveryDate: '1783', discoverer: 'Juan José Elhuyar and Fausto Elhuyar', wikipediaExcerpt: 'Tungsten is a chemical element with the symbol W and atomic number 74.', electronConfiguration: '[Xe] 4f14 5d4 6s2' },
    { symbol: 'Re', name: 'Rhenium', atomicNumber: 75, atomicMass: 186.207, category: 'Transition Metal', group: 7, period: 6, meltingPoint: 3186, boilingPoint: 5869, discoveryDate: '1925', discoverer: 'Walter Noddack, Ida Noddack, and Otto Berg', wikipediaExcerpt: 'Rhenium is a chemical element with the symbol Re and atomic number 75.', electronConfiguration: '[Xe] 4f14 5d5 6s2' },
    { symbol: 'Os', name: 'Osmium', atomicNumber: 76, atomicMass: 190.23, category: 'Transition Metal', group: 8, period: 6, meltingPoint: 3033, boilingPoint: 5027, discoveryDate: '1803', discoverer: 'Smithson Tennant', wikipediaExcerpt: 'Osmium is a chemical element with the symbol Os and atomic number 76.', electronConfiguration: '[Xe] 4f14 5d6 6s2' },
    { symbol: 'Ir', name: 'Iridium', atomicNumber: 77, atomicMass: 192.217, category: 'Transition Metal', group: 9, period: 6, meltingPoint: 2446, boilingPoint: 4428, discoveryDate: '1803', discoverer: 'Smithson Tennant', wikipediaExcerpt: 'Iridium is a chemical element with the symbol Ir and atomic number 77.', electronConfiguration: '[Xe] 4f14 5d7 6s2' },
    { symbol: 'Pt', name: 'Platinum', atomicNumber: 78, atomicMass: 195.084, category: 'Transition Metal', group: 10, period: 6, meltingPoint: 1768.3, boilingPoint: 3825, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Platinum is a chemical element with the symbol Pt and atomic number 78.', electronConfiguration: '[Xe] 4f14 5d9 6s1' },
    { symbol: 'Au', name: 'Aurum', atomicNumber: 79, atomicMass: 196.966, category: 'Transition Metal', group: 11, period: 6, meltingPoint: 1064.18, boilingPoint: 2856, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Gold is a chemical element with the symbol Au and atomic number 79.', electronConfiguration: '[Xe] 4f14 5d10 6s1' },
    { symbol: 'Hg', name: 'Mercury', atomicNumber: 80, atomicMass: 200.592, category: 'Transition Metal', group: 12, period: 6, meltingPoint: -38.83, boilingPoint: 356.73, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Mercury is a chemical element with the symbol Hg and atomic number 80.', electronConfiguration: '[Xe] 4f14 5d10 6s2' },
    { symbol: 'Tl', name: 'Thallium', atomicNumber: 81, atomicMass: 204.38, category: 'Post-transition Metal', group: 13, period: 6, meltingPoint: 304, boilingPoint: 1470, discoveryDate: '1861', discoverer: 'William Crookes', wikipediaExcerpt: 'Thallium is a chemical element with the symbol Tl and atomic number 81.', electronConfiguration: '[Xe] 4f14 5d10 6s2 6p1' },
    { symbol: 'Pb', name: 'Lead', atomicNumber: 82, atomicMass: 207.2, category: 'Post-transition Metal', group: 14, period: 6, meltingPoint: 327.5, boilingPoint: 1749, discoveryDate: 'Ancient', discoverer: 'N/A', wikipediaExcerpt: 'Lead is a chemical element with the symbol Pb and atomic number 82.', electronConfiguration: '[Xe] 4f14 5d10 6s2 6p2' },
    { symbol: 'Bi', name: 'Bismuth', atomicNumber: 83, atomicMass: 208.980, category: 'Post-transition Metal', group: 15, period: 6, meltingPoint: 271.4, boilingPoint: 1564, discoveryDate: '1753', discoverer: 'Claude François Geoffroy', wikipediaExcerpt: 'Bismuth is a chemical element with the symbol Bi and atomic number 83.', electronConfiguration: '[Xe] 4f14 5d10 6s2 6p3' },
    { symbol: 'Po', name: 'Polonium', atomicNumber: 84, atomicMass: 209, category: 'Metalloid', group: 16, period: 6, meltingPoint: 254, boilingPoint: 962, discoveryDate: '1940', discoverer: 'Marie Curie and Pierre Curie', wikipediaExcerpt: 'Polonium is a chemical element with the symbol Po and atomic number 84.', electronConfiguration: '[Xe] 4f14 5d10 6s2 6p4' },
    { symbol: 'At', name: 'Astatine', atomicNumber: 85, atomicMass: 210, category: 'Halogen', group: 17, period: 6, meltingPoint: 302, boilingPoint: 337, discoveryDate: '1940', discoverer: 'Dale R. Corson, Emilio Segrè, and Glenn T. Seaborg', wikipediaExcerpt: 'Astatine is a chemical element with the symbol At and atomic number 85.', electronConfiguration: '[Xe] 4f14 5d10 6s2 6p5' },
    { symbol: 'Rn', name: 'Radon', atomicNumber: 86, atomicMass: 222, category: 'Noble Gas', group: 18, period: 6, meltingPoint: -71, boilingPoint: -61.7, discoveryDate: '1899', discoverer: 'Frederick Dorn', wikipediaExcerpt: 'Radon is a chemical element with the symbol Rn and atomic number 86.', electronConfiguration: '[Xe] 4f14 5d10 6s2 6p6' },
    { symbol: 'Fr', name: 'Francium', atomicNumber: 87, atomicMass: 223, category: 'Alkali Metal', group: 1, period: 7, meltingPoint: 27, boilingPoint: 677, discoveryDate: '1939', discoverer: 'Marg uerite Perey', wikipediaExcerpt: 'Francium is a chemical element with the symbol Fr and atomic number 87.', electronConfiguration: '[Rn] 7s1' },
    { symbol: 'Ra', name: 'Radium', atomicNumber: 88, atomicMass: 226, category: 'Alkaline Earth Metal', group: 2, period: 7, meltingPoint: 700, boilingPoint: 1140, discoveryDate: '1898', discoverer: 'Marie Curie and Pierre Curie', wikipediaExcerpt: 'Radium is a chemical element with the symbol Ra and atomic number 88.', electronConfiguration: '[Rn] 7s2' },
    { symbol: 'Ac', name: 'Actinium', atomicNumber: 89, atomicMass: 227, category: 'Actinide', group: 3, period: 7, meltingPoint: 1050, boilingPoint: 3198, discoveryDate: '1899', discoverer: 'André-Louis Debierne', wikipediaExcerpt: 'Actinium is a chemical element with the symbol Ac and atomic number 89.', electronConfiguration: '[Rn] 6d1 7s2' },
    { symbol: 'Th', name: 'Thorium', atomicNumber: 90, atomicMass: 232.038, category: 'Actinide', group: 4, period: 7, meltingPoint: 1750, boilingPoint: 4788, discoveryDate: '1828', discoverer: 'Jöns Jacob Berzelius', wikipediaExcerpt: 'Thorium is a chemical element with the symbol Th and atomic number 90.', electronConfiguration: '[Rn] 6d2 7s2' },
    { symbol: 'Pa', name: 'Protactinium', atomicNumber: 91, atomicMass: 231.035, category: 'Actinide', group: 5, period: 7, meltingPoint: 1572, boilingPoint: 4027, discoveryDate: '1917', discoverer: 'Lise Meitner and Otto Hahn', wikipediaExcerpt: 'Protactinium is a chemical element with the symbol Pa and atomic number 91.', electronConfiguration: '[Rn] 5f2 6d1 7s2' },
    { symbol: 'U', name: 'Uranium', atomicNumber: 92, atomicMass: 238.028, category: 'Actinide', group: 6, period: 7, meltingPoint: 1132.3, boilingPoint: 4131, discoveryDate: '1789', discoverer: 'Martin Heinrich Klaproth', wikipediaExcerpt: 'Uranium is a chemical element with the symbol U and atomic number 92.', electronConfiguration: '[Rn] 5f3 6d1 7s2' },
    { symbol: 'Np', name: 'Neptunium', atomicNumber: 93, atomicMass: 237, category: 'Actinide', group: 7, period: 7, meltingPoint: 637, boilingPoint: 3902, discoveryDate: '1940', discoverer: 'Edwin McMillan and Philip H. Abelson', wikipediaExcerpt: 'Neptunium is a chemical element with the symbol Np and atomic number 93.', electronConfiguration: '[Rn] 5f4 6d1 7s2' },
    { symbol: 'Pu', name: 'Plutonium', atomicNumber: 94, atomicMass: 244, category: 'Actinide', group: 8, period: 7, meltingPoint: 639.4, boilingPoint: 3228, discoveryDate: '1940', discoverer: 'Glenn T. Seaborg, Edwin McMillan, and others', wikipediaExcerpt: 'Plutonium is a chemical element with the symbol Pu and atomic number 94.', electronConfiguration: '[Rn] 5f6 7s2' },
    { symbol: 'Am', name: ' Am', atomicNumber: 95, atomicMass: 243, category: 'Actinide', group: 9, period: 7, meltingPoint: 1050, boilingPoint: 2600, discoveryDate: '1944', discoverer: 'Glenn T. Seaborg, Albert Ghiorso, and others', wikipediaExcerpt: 'Americium is a chemical element with the symbol Am and atomic number 95.', electronConfiguration: '[Rn] 5f7 7s2' },
    { symbol: 'Cm', name: 'Curium', atomicNumber: 96, atomicMass: 247, category: 'Actinide', group: 10, period: 7, meltingPoint: 1340, boilingPoint: 3100, discoveryDate: '1944', discoverer: 'Glenn T. Seaborg, Albert Ghiorso, and others', wikipediaExcerpt: 'Curium is a chemical element with the symbol Cm and atomic number 96.', electronConfiguration: '[Rn] 5f7 6d1 7s2' },
    { symbol: 'Bk', name: 'Berkelium', atomicNumber: 97, atomicMass: 247, category: 'Actinide', group: 11, period: 7, meltingPoint: 986, boilingPoint: 2627, discoveryDate: '1949', discoverer: 'Glenn T. Seaborg, Albert Ghiorso, and others', wikipediaExcerpt: 'Berkelium is a chemical element with the symbol Bk and atomic number 97.', electronConfiguration: '[Rn] 5f9 7s2' },
    { symbol: 'Cf', name: 'Californium', atomicNumber: 98, atomicMass: 251, category: 'Actinide', group: 12, period: 7, meltingPoint: 900, boilingPoint: 1470, discoveryDate: '1950', discoverer: 'Glenn T. Seaborg, Albert Ghiorso, and others', wikipediaExcerpt: 'Californium is a chemical element with the symbol Cf and atomic number 98.', electronConfiguration: '[Rn] 5f10 7s2' },
    { symbol: 'Es', name: 'Einsteinium', atomicNumber: 99, atomicMass: 252, category: 'Actinide', group: 3, period: 7, meltingPoint: 860, boilingPoint: 1269, discoveryDate: '1952', discoverer: 'Glenn T. Seaborg, Albert Ghiorso, and others', wikipediaExcerpt: 'Einsteinium is a chemical element with the symbol Es and atomic number 99.', electronConfiguration: '[Rn] 5f11 7s2' },
    { symbol: 'Fm', name: 'Fermium', atomicNumber: 100, atomicMass: 257, category: 'Actinide', group: 4, period: 7, meltingPoint: 1527, boilingPoint: 2600, discoveryDate: '1952', discoverer: 'Glenn T. Seaborg, Albert Ghiorso, and others', wikipediaExcerpt: 'Fermium is a chemical element with the symbol Fm and atomic number 100.', electronConfiguration: '[Rn] 5f12 7s2' },
    { symbol: 'Md', name: 'Mendelevium', atomicNumber: 101, atomicMass: 258, category: 'Actinide', group: 5, period: 7, meltingPoint: 827, boilingPoint: 1100, discoveryDate: '1955', discoverer: 'Glenn T. Seaborg, Albert Ghiorso, and others', wikipediaExcerpt: 'Mendelevium is a chemical element with the symbol Md and atomic number 101.', electronConfiguration: '[Rn] 5f13 7s2' },
    { symbol: 'No', name: 'Nobelium', atomicNumber: 102, atomicMass: 259, category: 'Actinide', group: 6, period: 7, meltingPoint: 827, boilingPoint: 1100, discoveryDate: '1958', discoverer: 'Glenn T. Seaborg, Albert Ghiorso, and others', wikipediaExcerpt: 'Nobelium is a chemical element with the symbol No and atomic number 102.', electronConfiguration: '[Rn] 5f14 7s2' },
    { symbol: 'Lr', name: 'Lawrencium', atomicNumber: 103, atomicMass: 266, category: 'Actinide', group: 3 , period: 7, meltingPoint: 1627, boilingPoint: 4000, discoveryDate: '1961', discoverer: 'Albert Ghiorso, Glenn T. Seaborg, and others', wikipediaExcerpt: 'Lawrencium is a chemical element with the symbol Lr and atomic number 103.', electronConfiguration: '[Rn] 5f14 7s2 7p1' },
    { symbol: 'Rf', name: 'Rutherfordium', atomicNumber: 104, atomicMass: 267, category: 'Transition Metal', group: 4, period: 7, meltingPoint: 2400, boilingPoint: 5800, discoveryDate: '1964', discoverer: 'Georgy Flerov and others', wikipediaExcerpt: 'Rutherfordium is a chemical element with the symbol Rf and atomic number 104.', electronConfiguration: '[Rn] 5f14 6d2 7s2' },
    { symbol: 'Db', name: 'Dubnium', atomicNumber: 105, atomicMass: 268, category: 'Transition Metal', group: 5, period: 7, meltingPoint: 2400, boilingPoint: 5800, discoveryDate: '1970', discoverer: 'Georgy Flerov and others', wikipediaExcerpt: 'Dubnium is a chemical element with the symbol Db and atomic number 105.', electronConfiguration: '[Rn] 5f14 6d3 7s2' },
    { symbol: 'Sg', name: 'Seaborgium', atomicNumber: 106, atomicMass: 271, category: 'Transition Metal', group: 6, period: 7, meltingPoint: 2700, boilingPoint: 5900, discoveryDate: '1974', discoverer: 'Albert Ghiorso and others', wikipediaExcerpt: 'Seaborgium is a chemical element with the symbol Sg and atomic number 106.', electronConfiguration: '[Rn] 5f14 6d4 7s2' },
    { symbol: 'Bh', name: 'Bohrium', atomicNumber: 107, atomicMass: 270, category: 'Transition Metal', group: 7, period: 7, meltingPoint: 2600, boilingPoint: 5800, discoveryDate: '1981', discoverer: 'G. N. Flerov and others', wikipediaExcerpt: 'Bohrium is a chemical element with the symbol Bh and atomic number 107.', electronConfiguration: '[Rn] 5f14 6d5 7s2' },
    { symbol: 'Hs', name: 'Hassium', atomicNumber: 108, atomicMass: 277, category: 'Transition Metal', group: 8, period: 7, meltingPoint: 2700, boilingPoint: 6000, discoveryDate: '1984', discoverer: 'Peter Armbruster and others', wikipediaExcerpt: 'Hassium is a chemical element with the symbol Hs and atomic number 108.', electronConfiguration: '[Rn] 5f14 6d6 7s2' },
    { symbol: 'Mt', name: 'Meitnerium', atomicNumber: 109, atomicMass: 278, category: 'Transition Metal', group: 9, period: 7, meltingPoint: 2700, boilingPoint: 6000, discoveryDate: '1982', discoverer: 'Peter Armbruster and others', wikipediaExcerpt: 'Meitnerium is a chemical element with the symbol Mt and atomic number 109.', electronConfiguration: '[Rn] 5f14 6d7 7s2' },
    { symbol: 'Ds', name: 'Darmstadtium', atomicNumber: 110, atomicMass: 281, category: 'Transition Metal', group: 10, period: 7, meltingPoint: 2700, boilingPoint: 6000, discoveryDate: '1994', discoverer: 'Peter Armbruster and others', wikipediaExcerpt: 'Darmstadtium is a chemical element with the symbol Ds and atomic number 110.', electronConfiguration: '[Rn] 5f14 6d8 7s2' },
    { symbol: 'Rg', name: 'Roentgenium', atomicNumber: 111, atomicMass: 282, category: 'Transition Metal', group: 11, period: 7, meltingPoint: 2700, boilingPoint: 6000, discoveryDate: '1994', discoverer: 'Peter Armbruster and others', wikipediaExcerpt: 'Roentgenium is a chemical element with the symbol Rg and atomic number 111.', electronConfiguration: '[Rn] 5f14 6d9 7s2' },
    { symbol: 'Cn', name: 'Copernicium', atomicNumber: 112, atomicMass: 285, category: 'Transition Metal', group: 12, period: 7, meltingPoint: 2700, boilingPoint: 6000, discoveryDate: '1996', discoverer: 'Peter Armbruster and others', wikipediaExcerpt: 'Copernicium is a chemical element with the symbol Cn and atomic number 112.', electronConfiguration: '[Rn] 5f14 6d10 7s2' },
    { symbol: 'Nh', name: 'Nihonium', atomicNumber: 113, atomicMass: 286, category: 'Post-transition Metal', group: 13, period: 7, meltingPoint: 2700, boilingPoint: 6000, discoveryDate: '2004', discoverer: 'Kosuke Morita and others', wikipediaExcerpt: 'Nihonium is a chemical element with the symbol Nh and atomic number 113.', electronConfiguration: '[Rn] 5f14 6d10 7s2 7p1' },
    { symbol: 'Fl', name: 'Flerovium', atomicNumber: 114, atomicMass: 289, category: 'Post-transition Metal', group: 14, period: 7, meltingPoint: 2700, boilingPoint: 6000, discoveryDate: '1998', discoverer: 'Yuri Oganessian and others', wikipediaExcerpt: 'Flerovium is a chemical element with the symbol Fl and atomic number 114.', electronConfiguration: '[Rn] 5f14 6d10 7s2 7p2' },
    { symbol: 'Mc', name: 'Moscovium', atomicNumber: 115, atomicMass: 290, category: 'Post-transition Metal', group: 15, period: 7, meltingPoint: 2700, boilingPoint: 6000, discoveryDate: '2003', discoverer: 'Yuri Oganessian and others', wikipediaExcerpt: 'Moscovium is a chemical element with the symbol Mc and atomic number 115.', electronConfiguration: '[Rn] 5f14 6d10 7s2 7p3' },
    { symbol: 'Lv', name: 'Livermorium', atomicNumber: 116, atomicMass: 293, category: 'Post-transition Metal', group: 16, period: 7, meltingPoint: 2700, boilingPoint: 6000, discoveryDate: '2000', discoverer: 'Yuri Oganessian and others', wikipediaExcerpt: 'Livermorium is a chemical element with the symbol Lv and atomic number 116.', electronConfiguration: '[Rn] 5f14 6d10 7s2 7p4' },
    { symbol: 'Ts', name: 'Tennessine', atomicNumber: 117, atomicMass: 294, category: 'Halogen', group: 17, period: 7, meltingPoint: 2700, boilingPoint: 6000, discoveryDate: '2010', discoverer: 'Yuri Oganessian and others', wikipediaExcerpt: 'Tennessine is a chemical element with the symbol Ts and atomic number 117.', electronConfiguration: '[Rn] 5f14 6d10 7s2 7p5' },
    { symbol: 'Og', name: 'Oganesson', atomicNumber: 118, atomicMass: 294, category: 'Noble Gas', group: 18, period: 7, meltingPoint: 2700, boilingPoint: 6000, discoveryDate: '2002', discoverer: 'Yuri Oganessian and others', wikipediaExcerpt: 'Oganesson is a chemical element with the symbol Og and atomic number 118.', electronConfiguration: '[Rn] 5f14 6d10 7s2 7p6' }
    ];

document.addEventListener('DOMContentLoaded', () => {
    initPeriodicTable();
    initMoleCalculator();
    initAvogadroSimulator();
    initGasVolumeCalculator();
    initEmpiricalFormulaCalculator();
    initPercentCompositionCalculator();
    initChemicalReactionSimulator();
    initEquilibriumSimulator();
    initLeChatelierSimulator();
    initAcidCarbonateSimulator();
    initQuiz();

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});

function initPeriodicTable() {
    const container = document.getElementById('periodic-table');
    if (!container) return;

    const table = document.createElement('div');
    table.className = 'periodic-table';

    elements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.category.toLowerCase().replace(' ', '-')}`;
        elementDiv.style.gridColumn = element.group;
        elementDiv.style.gridRow = element.period;
        elementDiv.innerHTML = `
            <div class="atomic-number">${element.atomicNumber}</div>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
        `;
        elementDiv.addEventListener('click', () => showElementDetails(element));
        table.appendChild(elementDiv);
    });

    container.appendChild(table);
}

function showElementDetails(element) {
    const detailsContainer = document.getElementById('element-details');
    if (!detailsContainer) return;

    detailsContainer.innerHTML = `
        <h2>${element.name} (${element.symbol})</h2>
        <p>Atomic Number: ${element.atomicNumber}</p>
        <p>Atomic Mass: ${element.atomicMass}</p>
        <p>Category: ${element.category}</p>
        <p>Group: ${element.group}</p>
        <p>Period: ${element.period}</p>
        <p>Melting Point: ${element.meltingPoint}°C</p>
        <p>Boiling Point: ${element.boilingPoint}°C</p>
        <p>Discovered: ${element.discoveryDate} by ${element.discoverer}</p>
        <p>Electron Configuration: ${element.electronConfiguration}</p>
        <p>${element.wikipediaExcerpt}</p>
    `;
    detailsContainer.style.display = 'block';
}



function initQuiz() {
    const container = document.getElementById('quiz');
    if (!container) return;

    const questions = [
        {
            question: "What is the atomic number of carbon?",
            options: ["5", "6", "7", "8"],
            correct: 1
        },
        {
            question: "Which element has the symbol 'Na'?",
            options: ["Nitrogen", "Neon", "Sodium", "Nickel"],
            correct: 2
        },
        {
            question: "What is the most abundant element in the Earth's atmosphere?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
            correct: 2
        },
        {
            question: "Which of these is a noble gas?",
            options: ["Chlorine", "Helium", "Bromine", "Lithium"],
            correct: 1
        },
        {
            question: "What is the atomic number of gold?",
            options: ["47", "79", "118", "29"],
            correct: 1
        }
    ];

    const template = `
        <div class="quiz-container">
            ${questions.map((q, i) => `
                <div class="question-card">
                    <h3>Question ${i + 1}</h3>
                    <p>${q.question}</p>
                    <div class="options">
                        ${q.options.map((opt, j) => `
                            <label class="option">
                                <input type="radio" name="q${i}" value="${j}">
                                <span>${opt}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
            <button id="submit-quiz" class="submit-button">Submit Answers</button>
            <div id="quiz-results" class="quiz-results"></div>
        </div>
    `;

    container.innerHTML = template;

    const submitButton = container.querySelector('#submit-quiz');
    const resultsDiv = container.querySelector('#quiz-results');

    submitButton.addEventListener('click', () => {
        let score = 0;
        questions.forEach((q, i) => {
            const selected = container.querySelector(`input[name="q${i}"]:checked`);
            if (selected && parseInt(selected.value) === q.correct) {
                score++;
            }
        });

        resultsDiv.innerHTML = `
            <h3>Your Score: ${score}/${questions.length}</h3>
            <p>Percentage: ${((score/questions.length) * 100).toFixed(1)}%</p>
        `;
        resultsDiv.classList.add('active');
    });
}
