import { Injectable } from '@angular/core';
import * as d3 from 'd3';

type DataType = {x:any, y:any};

@Injectable({
  providedIn: 'root'
})

export class TubeService {

  constructor() { }

  render() {
    // create data
var data = [{x: 20, y: 0}, {x: 40, y: 0}, {x: 100, y: 0}, {x: 120, y: 0}, {x: 140, y: 0}]

// create svg element:
var svg = d3.select("#svg-wrapper").append("svg").attr("width", 800).attr("height", 200).attr("padding", 10)

// prepare a helper function
var curveFunc = d3.line<DataType>()
  .curve(d3.curveLinear)              // This is where you define the type of curve. Try curveStep for instance.
  .x(function(d) { return d.x })
  .y(function(d) { return d.y })

// Add the path using this helper function
svg.append('path')
  .attr('d', curveFunc(data))
  .attr('stroke', '#3933FF')
  .attr('fill', 'none')
  .attr('stroke-width', '20')
  }
}
